import { Routes, Route } from 'react-router-dom'
import {About, Detail, Home,Landing, Error, Admin}from './views/Index'
import './App.css'

function App() {

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

export default App
