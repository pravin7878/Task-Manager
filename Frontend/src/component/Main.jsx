import React from 'react'
import Header from './Header'
import Home from '../pages/Home'
import AllRouts from '../Routes/AllRouts'

export default function Main() {
  return ( <main className='h-screen '>
       <Header/>
      <AllRouts/>
    </main>
  )
}
