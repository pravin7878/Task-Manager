import React from 'react'
import { Link } from 'react-router-dom'
import logoIcon from "../assets/logo.png";

export default function Header() {
  return (
    <div className='flex justify-between border-b-2 items-center pl-4 pr-4'>

      <div>
        <h3>Well-Come</h3>
      </div>
        <div className='flex justify-around font-bold items-center'>
          <Link className='bg-orange-600 pl-4 pr-4 p-1 rounded-md text-white w-1/2 text-center'>SingIn</Link>
          <span className='w-1/3 p-2'> 
          <img src={logoIcon} alt="profile" className='w-full'/>
          </span>
        </div>
    </div>
  )
}
