import { useState } from 'preact/hooks'
import { Routes, Route } from 'react-router-dom'
import {About, Detail, Home,Landing, Error, Admin}from './views/Index'
import './app.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
  <Routes>
    <Route path = {'/'} element= {<Landing/>}/>
    <Route path = {'/home'} element = {<Home/>}/>
    <Route path = {'/home/:id'} element = {<Detail/>}/>
    <Route path = {'/About'} element = {<About/>}/>
  </Routes>

 </div>
  )
}
