import React from 'react'

export default function Child2({receivedata}) {
    let x=1000;

    function senddata(){
        receivedata(100)
    }
  

  return (
    <div>Child

        <button onClick={senddata()}>send data</button>
    </div>
  )
}