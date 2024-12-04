import React, { useState } from "react";
import CardWrapper from "../Components/CardWrapper";
import Heading from "../Components/Heading";
import InputBox from "../Components/InputBox";
import PageChange from "../Components/PageChange";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Signup() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  return <div>Hi from sign up!
    <CardWrapper>
      <Heading heading ={"Sign Up"} subHeading={"Enter your information to create an account"} />
      <InputBox onChange={e=> setFirstName(e.target.value)} heading={"First Name"} placeholder={'Madhav'}/>
      <InputBox onChange={e=> setLastName(e.target.value)} heading={"Last Name"} placeholder={'Gaba'}/>
      <InputBox onChange={e=> setUserName(e.target.value)} heading={"Email ID"} placeholder={'madhavgaba@exmple.com'}/>
      <InputBox onChange={e=> setPassword(e.target.value)} heading={"Password"} placeholder={''}/>
      <button onClick={async ()=>{
        const response =  await axios.post("http://localhost:3000/api/v1/user/signup",{
          userName,
          firstName,
          lastName,
          password
        })
        localStorage.setItem("Token",response.data.token)
        navigate('/')
      }} type="button" className="w-[280px] text-white bg-gray-950 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg font-serif text-sm px-5 py-2.5 me-2 mb-2">Sign Up</button>
      <PageChange label ={"Already have an Account?"} to={"/signin"} buttonText={"Sign In"}/>
    </CardWrapper>
  </div>;
}

export default Signup;