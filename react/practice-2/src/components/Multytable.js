import React from 'react'

let num = 5;
function Multytable() {
  // const [table,setTable] = useState(0)
  // useEffect(()=>{
  //   let newtable = 0; 
  //   for(let i=1;i<=10;i++){

  //      newtable += +<br/>
       
  //   }
  //   setTable(newtable);  

  // },[])


  return (
    new Array(10).fill("").map((_, idx) => {
      const number = idx + 1
      return <>
      
        <p>{`${num} x ${number} = ${num * number}`}</p>
      
      </>
    })
  )

  // return (
  //   <div>{table}</div>
  // )
}

export default Multytable