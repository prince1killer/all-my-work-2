import React from "react"
import { useState } from "react";

function Calculate() {
    const [num1,setnum1] = useState(0);
    const [num2,setnum2] = useState(0);
    const [num3,setnum3] = useState(0);
    // const [num2,setnum2] = useState(0);
    // const num1 = (e) =>{
        
    // } 

    const ans=(e)=>{
        console.log(setnum3);
        console.log(e.target.value);
    }
    const submit = ()=>{
    //    setnum3(setnum1+setnum2);
        console.log(num1);    
        console.log(num2);
        setnum3(Number(num1)+Number(num2))
    }

  return (
    <div className='name'>
        <input type="number" className="num1" value={num1} onChange={(e)=>setnum1(e.target.value)}/> <br/>
        <input type="number" className="num2"  value={num2} onChange={(e)=>setnum2(e.target.value)}/> <br/>
        <button className="btn1" onClick={submit}>Submit</button><br/>
        <input type="number" className="num2" value={num3} onChange={ans} /> <br/>

    </div>
  )
}

export default Calculate