import React from 'react'


export default function Child1 (props) {
    console.log("coming maal from parent",props)
  return (
    <div>
        <h1>{props.umar}</h1>
        <h1>{props.a}</h1>
        <h1>{props.naam}</h1>
        <h1>{props.marks}</h1>

        <h1>I am Child </h1>
    </div>
  )
}