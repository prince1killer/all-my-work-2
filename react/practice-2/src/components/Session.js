import React, { useState } from 'react'

function Session() {
     
    

    const [t1,sett1] = useState("");
    const [t2,sett2] = useState("");
    const [t3,sett3] = useState("");
    const [t4,sett4] = useState("");
    const [t5,sett5] = useState("");

    const click1 = () => {
        console.log(23+34)
        console.log(t1)
        console.log(t2)
        console.log(t3)
        sessionStorage.setItem("t1",t1);
        sessionStorage.setItem("t2",t2);
        sessionStorage.setItem("t3",t3);
        sessionStorage.setItem("t4",t4);
        sessionStorage.setItem("t5",t5);


        window.localStorage.href='Session1.js';
    } 


  return (
    <div>
        <label>Enter your name = </label><input type='text' id='t1' placeholder='Enter the name' value={t1} onChange={(e)=>sett1(e.target.value)} /><br/>
        <label>Enter your Email = </label><input type='text' id='t2' placeholder='Enter the Email' value={t2} onChange={(e)=>sett2(e.target.value)}/><br/>
        <label>Enter your phone Number= </label><input type='number' id='t3' placeholder='Enter the phone Number' value={t3} onChange={(e)=>sett3(e.target.value)} /><br/>
        <label>Enter your address = </label><input type='text' id='t4' placeholder='Enter the address' value={t4} onChange={(e)=>sett4(e.target.value)} /><br/>
        <label>Enter your passwors = </label><input type='text' id='t5' placeholder='Enter the password' value={t5} onChange={(e)=>sett5(e.target.value)} /><br/>

        <button className='btn15' onClick={click1}>Submit</button>


    </div>
  )
}

export default Session