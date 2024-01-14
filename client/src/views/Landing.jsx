import React from 'react'
import {Link} from 'react-router-dom'

const Landing = () => {
  return (
    <div>
     <h1>Yo soy la Landing</h1>
     <Link to = {'/home'}>¡¡Pasá pa'l Home!!</Link>
    </div>
  )
}

export default Landing