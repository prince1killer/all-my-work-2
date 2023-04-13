import React from 'react'
import { useState } from 'react';

function Multcal() {
    const [n1,setn1] = useState(0);
    const [n2,setn2] = useState(0);
    const [n3,setn3] = useState(0);
    // const [n2,setn2] = useState(0);
    // const n1 = (e) =>{
        
    // } 

    const ans=(e)=>{
        console.log(setn3);
        console.log(e.target.value);
    }
    const add = ()=>{
        console.log(n1);    
        console.log(n2);
        setn3(Number(n1)+Number(n2))
    }
    const sub = ()=>{
        console.log(n1);    
        console.log(n2);
        setn3(Number(n1)-Number(n2))
    }
    const div = ()=>{
        console.log(n1);    
        console.log(n2);
        setn3(Number(n1)/Number(n2))
    }
    const mult = ()=>{
        console.log(n1);    
        console.log(n2);
        setn3(Number(n1)*Number(n2))
    }

  return (
    <div>
        <input type="number" className="n1" value={n1} onChange={(e)=>setn1(e.target.value)}/> <br/>
        <input type="number" className="n2"  value={n2} onChange={(e)=>setn2(e.target.value)}/> <br/>
        <button className="btn1" onClick={add}>Add</button>
        <button className="btn1" onClick={sub}>Sub</button>
        <button className="btn1" onClick={div}>Div</button>
        <button className="btn1" onClick={mult}>Multy</button><br/>
        <input type="number" className="num2" value={n3} onChange={ans} /> <br/>

    </div>
  )
}

export default Multcal