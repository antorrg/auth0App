import React from 'react'
import {Link} from 'react-router-dom'
import GenericButton from '../components/Buttons/GenericButton'

const Landing = () => {
  return (
    <div>
     <h1>Yo soy la Landing</h1>
     <Link to = {'/home'}>
      <GenericButton buttonText={"¡¡Pasá pa'l Home!!"}/></Link>
    </div>
  )
}

export default Landing