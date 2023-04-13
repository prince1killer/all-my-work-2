import React from 'react'

function Session() {

    const click1 = () => {
        
    } 


  return (
    <div>
        <label>Enter your name = </label><input type='text' id='t1' placeholder='Enter the name'/><br/>
        <label>Enter your Email = </label><input type='text' id='t2' placeholder='Enter the Email'/><br/>
        <label>Enter your phone Number= </label><input type='number' id='t3' placeholder='Enter the phone Number'/><br/>
        <label>Enter your address = </label><input type='text' id='t4' placeholder='Enter the address'/><br/>
        <label>Enter your passwors = </label><input type='text' id='t5' placeholder='Enter the password'/><br/>

        <button className='btn15' onClick={click1}>Submit</button>


    </div>
  )
}

export default Session