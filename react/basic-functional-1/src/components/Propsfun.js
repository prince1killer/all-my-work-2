import React,{ useState } from 'react'

function Propsfun(props) {

    const [hello,setHello] = useState(props.hello);

    const click2 = () => {
        setHello("This is props in Function using with useState ");
    }
  return (
    <div>
        <h1>{hello}</h1>   <br/>
        <button onClick={click2}>click</button>    
    </div>
  )
}

export default Propsfun