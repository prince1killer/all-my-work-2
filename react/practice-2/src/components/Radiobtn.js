import React, { useState } from 'react'

function Radiobtn() {

    let r1 = document.querySelector("#r1");
    let r2 = document.querySelector("#r2");

    const [gen,setGen] = useState();
    const [txt1,setTxt1] = useState("");

    console.log(gen);
    // console.log(setGen);

    function Submitcl(){

        if(r1.checked == true)
        {
            console.log(23+34)
            console.log(gen);
            setTxt1(gen);
        }
        else if(r2.checked == true){
            setTxt1("Female");
            setTxt1(gen);

        }
        else{
            setTxt1("plz select gender")
        }
    }

  return (
    <div>
        <input type='radio' id='r1' value="Male" onChange={(e)=>setGen(e.target.value)} name="male" />Male<br/>
        <input type='radio' id='r2' value="Female" onChange={(e)=>setGen(e.target.value)} name="male" />Female<br/>
        <button type='button' className='btn16' onClick={Submitcl}>click</button><br/>
        <input type='text' value={txt1} onChange={(e)=>setGen(e.target.value)} />
    </div>
  )
}

export default Radiobtn