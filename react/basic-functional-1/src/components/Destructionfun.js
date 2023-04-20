import React from 'react'

function Destructionfun(props) {//firt method  --> function Destructionfun()({name,roll,city})

    const {name, roll , city} = props  //<--Second method
  return (
    <div>
        {/* Destruction is use to make out program fast and best */}
        {/* First method to destruction the props method */}

        {/* Second method */}
            <h3>Enter your name = {name} </h3>
            <h3>Enter your roll = {roll} </h3>
            <h3>Enter your city = {city} </h3>
    </div>
  )
}

export default Destructionfun