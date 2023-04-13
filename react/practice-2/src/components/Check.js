import React, { useState } from 'react'

function Check() {

    let c1 = document.querySelector("#c1");
    let c2 = document.getElementById("c2");
    let c3 = document.getElementById("c3");
    // const[python,setPython] = useState("");
    // const[java,setJava] = useState("");
    // const[cpp,setCpp] = useState("");
    const[resultans,setResultans] = useState("");

    function btnsubmit(){
        if(c1.checked == true){
          setResultans("setPython")
        }
        if(c2.checked == true){
          setResultans("java")
        }
        if(c3.checked == true){
          setResultans("cpp")
        } 
        if(c1.checked == true && c2.checked == true){
          setResultans("python"+", "+"java");
        }
        if(c2.checked == true && c3.checked == true){
          setResultans("java"+", "+"cpp");
        }
        if(c3.checked == true && c1.checked == true){
          setResultans("cpp"+", "+"python");
        }
        if(c1.checked == true && c2.checked == true && c3.checked == true){
          setResultans("python"+", "+"java"+", "+"cpp");
        }
    }

  return (
    <div>
        <input type='checkbox' id='c1' />Python <br/>
        <input type='checkbox' id='c2'  />Java <br/>
        <input type='checkbox' id='c3' />Cpp <br/>
        <button type='button' className='btn13' onClick={btnsubmit}>Submit</button><br/> 
        <input type='text' value={resultans} onChange={(e)=>setResultans(e)} ></input>
    </div>
  )
}

export default Check