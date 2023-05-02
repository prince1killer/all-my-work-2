import React,{ useEffect, useState } from 'react'

function Arrayinfo() {

      const [cars,setCars] = useState([]);

    const car = ["car1","car2","car3","car4","car5","car6","car7","car8"];
    useEffect(()=>{
            // for(let i=0;i<=6;i++){
            //       setCars.push(key={car[i]})   
            // }
        },[])


  return (
    <div>
        <p>{cars}</p>
    </div>
  )
}

export default Arrayinfo