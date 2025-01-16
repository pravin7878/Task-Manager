import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function TaskCard({ title, status, dedline }) {

  // const ganarateStatus = ()=>{

  // }

  // useEffect(()=>{

  // })

  const showDedline = status === "pending" || status === "in_progrash" ? dedline : null

  return (<Link to={""}>
    <div style={{ border: status ? "solid green" : "solid red" }} className='flex flex-col p-3 rounded-md border-2'>
      <h3 >Title : {title}</h3>
      <span className='flex justify-between pr-3'>
        <p className='text-red-400 font-normal'>Concluds on : {showDedline}</p>
        <h4 className='text-sm'>Status : {status}</h4>
      </span>
    </div>
  </Link>
  )
}
