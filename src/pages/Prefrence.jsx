import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Prefrence() {
    const [active, setActive] = useState([])

    useEffect(()=>{
        setActive()
    },[active])

    return (
    <div className='mb-5'>
    <h2
    className="text-center text-4xl font-semibold"
    style={{ margin: "30px,0px", marginTop: "90px" }}
    >
        What kind of news do you like ?<br/>
            Choose any three
    </h2> 
    <div className='h-full w-full justify-center items-center'>
        <div className='mt-4 flex justify-center items-center w-full h-full gap-2 text-center'>
            <button
            className="btn btn-sm btn-dark"
            >
                Sports    
            </button>
            <button
            className="btn btn-sm btn-dark"
            >
                Technology    
            </button>
            <button
            className="btn btn-sm btn-dark"
            >
                Science    
            </button>
            <button
            className="btn btn-sm btn-dark"
            >
                Health
            </button>
            <button
            className="btn btn-sm btn-dark"
            >
                Entertainment  
            </button>
            <button
            className="btn btn-sm btn-dark"
            >
                Business    
            </button>
        </div> 
    </div> 
    </div>
  )
}

export default Prefrence
