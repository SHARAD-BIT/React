import React from 'react'
import Child1 from './Child1'

export default function Parent() {
    let a=100;
    let name="vikas";
    let age=27;
    let marks =[30,40,50]
  return (
    <div>
        <h1>I am Parent</h1>
        <Child1 a={a} naam={name} umar={age} marks={marks}/>
    </div>
  )
}