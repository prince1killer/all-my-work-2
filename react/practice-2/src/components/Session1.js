import React,{ useEffect, useState } from 'react'


function Session1() {
    const [s1,sets1] = useState("sdsd");
    const [s2,sets2] = useState("");
    const [s3,sets3] = useState("");
    const [s4,sets4] = useState("");
    const [s5,sets5] = useState("");

    const hello=()=>{
      const name=sessionStorage.getItem("t1");
      console.log(name);

    }
    useEffect(()=>{ 

      console.log("hello world")
      sets1(sessionStorage.getItem("t1"));
      sets2(sessionStorage.getItem("t2"));
      sets3(sessionStorage.getItem("t3"));
      sets4(sessionStorage.getItem("t4"));
      sets5(sessionStorage.getItem("t5"));

      hello();


    })
      // useEffect(()=>{
      //   sets1(sessionStorage.getItem("t1"));
      //   console.log(s1)

      // })


  return (
    <div>
        <label>Enter your name = </label><input type='text' id="s1" value={s1} onChange={(e)=>sets1(e.target.value)} placeholder='Enter the name'/><br/>
        {/* <button onClick={}></button> */}
        <label>Enter your Email = </label><input type='text' id="s2" value={s2} onChange={(e)=>sets2(e.target.value)}  placeholder='Enter the Email'/><br/>
        <label>Enter your phone Number= </label><input type='number' value={s3} onChange={(e)=>sets3(e.target.value)} id="s3" placeholder='Enter the phone Number'/><br/>
        <label>Enter your address = </label><input type='text' id="s4" value={s4} onChange={(e)=>sets4(e.target.value)} placeholder='Enter the address'/><br/>
        <label>Enter your passwors = </label><input type='text' id="s5" value={s5} onChange={(e)=>sets5(e.target.value)} placeholder='Enter the password'/><br/>
    </div>
  )
}

export default Session1