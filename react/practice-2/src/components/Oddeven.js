import React, { useState } from 'react'

function Oddeven() {

    const [txt1, setTxt1] = useState("");
    const [txt2, setTxt2] = useState("");
    const [even, setEven] = useState();
    const [odd, setOdd] = useState();

    function btn1(){
        let a = Number(txt1);
        let b = Number(txt2);
        for(let i=a; i<=b; i++){
            if(i%2 == 0){
                setEven(i+", ");
            }
            else{
                setOdd(i+", ");
            }
        }
    }

  return (
    <div>
        <label>Enter the value one = </label><input type="text" value={txt1} onChange={(e)=>setTxt1(e.target.value)}/><br/>    
        <label>Enter the value Two = </label><input type="text" value={txt2} onChange={(e)=>setTxt2(e.target.value)}/><br/>
        <button type='button' onClick={btn1}>Submit</button> <br/>
        <label>Even = </label><lable>{even}</lable><br/>   
        <label>Odd = </label><lable>{odd}</lable>   
    </div>
  )
}

export default Oddeven