// import React,{ useState } from 'react'

// function Amstrong() {
   
//         // const [Dado, setdado] = useState('');
//       const [table, setTable] = useState("")
//       // let see;
//       for(let i=1;i<=10;i++){
//         setTable(23+" x "+i+" = "+(23*i))
//         // console.log(see)
//         // setTable(see);
//       }
//   return (
//     <>
//     <p>{table}</p>
//     </>
//   )
//   }
// export default Amstrong
import React, { useState } from "react";
 
function Amstrong() {
  const [username, setUsername] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  const [isCleared, setIsCleared] = useState(false);

  const saveData = () => {
    //saving username to sesstion storage
    sessionStorage.setItem("name", username);

    setIsSaved(true);
    setTimeout(() => {  setIsSaved(false);}, 2000);

  };

  const getSessionData = () => {
    //fetching username from sesstion storage
    return sessionStorage.getItem("name");
  };

  const clearSessionData = () => {
    //Removing username from sesstion storage
    sessionStorage.removeItem("name");

    setIsCleared(true);
    setTimeout(() => {
      setIsCleared(false);
    }, 2000);
  };
 
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h4 className="title">Simple Form</h4>
        </div>
 
        <div className="card-body">
          <p className="label">Username</p>
          <input  type="text" value={username} onChange={({ target }) => { setUsername(target.value); }} placeholder="Enter Username" className="text-input"/>
 
          <button onClick={saveData} className="btn">  {isSaved ? "Saved!" : "SUBMIT"}  </button>
 
          <div className="inrow">
            <p className="label"> Saved Data: </p>
 
            <button onClick={()=>{}} className="btn-small">  {isCleared ? "Removed!" : "Clear"} </button>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Amstrong;