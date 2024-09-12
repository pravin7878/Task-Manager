import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import List from '../pages/List'
import Board from '../pages/Board'

export default function AllRouts() {
  return (
    <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/list"} element={<List/>}/>
        <Route path={"/board"} element={<Board/>}/>
    </Routes>
  )
}
