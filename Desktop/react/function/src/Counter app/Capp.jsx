import React, { useState } from 'react'

export default  function Capp(){

    let [Count,Setcount]=useState(0);

     const Increament=()=>{
        Setcount(Count+1);
        console.log(Count)}
     
  const Decreament=()=>{
    Setcount(Count-1)
    console.log(Count)
  }
   
  const Reset=()=>{
    Setcount(Count=0)
    console.log(Count)
  }

  return (
    <div>
     <h1>Counter App:{Count}</h1>
     <button onClick={Increament}>Increament</button>
     <button onClick={Decreament}>Decreament</button>
     <button onClick={Reset}>Reset</button>


    </div>
  )
}
