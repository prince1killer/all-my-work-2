import React, { useEffect, useState } from 'react'

function Multytable() {

    const [table, seTable] = useState();
    const [txtv1, setTxtv1] = useState();
    // const click12 = () => {};
    useEffect(()=>{ 
        // function click112(){
            for(let i=0;i<=txtv1;i++){
             
                seTable( txtv1+" X "+i+" = "+(Number(txtv1)*i));        
            }
        // }
    })
  return (


    <div>
        <label>Enter the number = </label><input type='text' value={txtv1} onChange={(e)=>setTxtv1(e.target.value)}></input> <br/>
        <button type='button'  >Click</button>
        <p className='table'>{table}</p>    
    </div>
  )
}

export default Multytable