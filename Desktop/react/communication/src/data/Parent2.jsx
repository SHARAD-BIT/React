import React from 'react'
import Child2 from './Child2'

export default function Paren1() {
    receivedata=(x)=>{
        console.log("******",x)

    }
  
  return (
    <div>Paren1


        <Child2 receivedata={receivedata} />
    </div>
  )
}