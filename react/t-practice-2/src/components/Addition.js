import React,{ useState } from 'react'

function Addition() {
    // let t1 = document.getElementById("t1")
    // console.log(t1.value)
    const [txt1,setTxt1] = useState()
    const [txt2,setTxt2] = useState()
    const [txt3,setTxt3] = useState()

    function handleChange(e){
        setTxt1(e.target.value);
        // console.log(txt1);
    }
    function click12(){
        setTxt3(Number(txt1)+Number(txt2))
    }
  return (
    <div>
         <input type='text'  value={txt1} onChange={handleChange} /><br/>
        <input type='text' value={txt2} onChange={(e)=>setTxt2(e.target.value)} /><br/>
        <button type="button" onClick={click12}>click</button><br/>
        <input type='text' value={txt3} onChange={(e)=>setTxt3(e.target.value)}/>

    </div>
  )
}

export default Addition