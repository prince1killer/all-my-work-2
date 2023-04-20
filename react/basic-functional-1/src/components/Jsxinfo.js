import React from 'react'

function Jsxinfo() {

  return (
    //NOTE:- here is how, you hava to write js file from without jsx 
    React.createElement('div',null,
    React.createElement('h1',{id:"ddd",className:"ddd",style:{fontSize:50+"px",color:"blue"}},"hello world"),
    React.createElement('h1',{id:"dd",className:"dd",style:{fontSize:50+"px",color:"blue"}},"classnumber"),
    React.createElement('h1',{id:"dd",className:"dd",style:{fontSize:50+"px",color:"blue"}},"power"),
    )

  )
}

export default Jsxinfo