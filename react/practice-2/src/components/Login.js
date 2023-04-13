import React, { useState } from 'react'

function Login() {

    const [email,setEmail] = useState("");
    const [pass1,setPass1] = useState("");

    const loginclick = () => {

        if(Number(pass1) != 123){
            alert("email or Wrong password");
        }
        else if(pass1 ==""){
            alert("please enter password")
        }
        else{
            alert("You Login successfully")
        }


    }
 
  return (
    <div>
        <label>Enter you Email = </label><input type='email' placeholder='Enter your Email' value={email} onChange={(e)=>setEmail(e.target.value)} /><br/>
        <label>Enter you password = </label><input type='password' value={pass1} onChange={(e)=>setPass1(e.target.value)}/><br/>
        <button className='btn14' onClick={loginclick} >Login</button><br/>

    </div>
  )
}

export default Login