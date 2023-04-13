import React, { useState } from 'react'




function Drop() {
    // let d1 = document.querySelector("#d1");
    // let month = document.getElementById("month");
    // let year = document.getElementById("year");
    // date = date.value;
    const [date1, setDate1] = useState(1); 
    const [month, setMonth] = useState("jan"); 
    const [year, setYear] = useState(2001); 
    const [cale,setcale] = useState(""); 
    
    const onclickcal = () =>{
    // console.log(d1.value);
    // let a = date.value;

    setcale(date1+"/"+month+"/"+year);
}

  return (
    <div>
        <select id='date' value={date1} onChange={(e)=>setDate1(e.target.value)} name="cal">
            <option  value="1">1</option>
            <option  value="2">2</option>
            <option  value="3">3</option>
            <option  value="4">4</option>
            <option  value="5">5</option>
            <option  value="6">6</option>
            <option  value="7">7</option>
            <option  value="8">8</option>
            <option  value="9">9</option>
            <option  value="10">10</option>
        </select>
        <select id='month' value={month} onChange={(e)=>setMonth(e.target.value)} name="cal">
            <option value="jan">Jan</option>
            <option value="feb">Feb</option>
            <option value="mar">Mar</option>
            <option value="apr">Apr</option>
            <option value="may">May</option>
            <option value="jun">Jun</option>
            <option value="jul">Jul</option>
            <option value="aug">Aug</option>
            <option value="sep">Sep</option>
            <option value="oct">Oct</option>
        </select>
        <select id='year' value={year} onChange={(e)=>setYear(e.target.value)} name="cal">
            <option value="2001">2001</option>
            <option value="2002">2002</option>
            <option value="2003">2003</option>
            <option value="2004">2004</option>
            <option value="2005">2005</option>
            <option value="2006">2006</option>
            <option value="2007">2007</option>
            <option value="2008">2008</option>
            <option value="2009">2009</option>
            <option value="2010">2010</option>
        </select>
        <button onClick={onclickcal}>click</button>
        <input type="text" value={cale} onChange={(e)=>setcale(e)}></input>
    </div>
  )
}

export default Drop