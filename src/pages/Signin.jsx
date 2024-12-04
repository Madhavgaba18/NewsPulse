import React, { useState } from "react";
import CardWrapper from "../Components/CardWrapper";
import Heading from "../Components/Heading";
import InputBox from "../Components/InputBox";
import PageChange from "../Components/PageChange";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function Signin() {
  const navigate = useNavigate()
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")

  return <div>Hi from sign in!
    <CardWrapper>
      <Heading heading ={"Sign In"} subHeading={"Enter your information to Sign in"} />
      <InputBox onChange={e=> setUserName(e.target.value)} heading={"Email ID"} placeholder={'madhavgaba@exmple.com'}/>
      <InputBox onChange={e=> setPassword(e.target.value)} heading={"Password"} placeholder={''}/>
      <button type="button"
      onClick={async ()=>{
        const response =  await axios.post("http://localhost:3000/api/v1/user/signin",{
          userName,
          password
        })
        localStorage.setItem("Token",response.data.token)
        navigate('/')
      }}
      className="w-[280px] text-white bg-gray-950 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg font-serif text-sm px-5 py-2.5 me-2 mb-2">Sign Up</button>
      <PageChange label={"donot have an Account?"} to={"/signup"} buttonText={"Sign Up"}/>
    </CardWrapper>
  </div>;
}

export default Signin;
