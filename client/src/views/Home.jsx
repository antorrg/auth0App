import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import axios from 'axios'

const Home = () => {

  const pedir = async()=>{
    try {
      const game = await axios(`/game`);
      const data = game.data;
      return data;
    } catch (error) {
      alert('no se pudió')
    }
  }
  useEffect(()=>{
    pedir()
  },[])

  const data = pedir; 
  return (
    <div>
    <NavBar/>
    <h1>Yo soy la Home a pesar de todo...</h1>
    </div>
  )
}

export default Home