import React from 'react'
import Card from './Card'
import style from './styles/Cards.module.css'

const Cards = ({game}) => {
  //console.log(game)
  return (
    <div className={style.cardList}>
    {game && game.map((gms)=>
    <Card key = {gms.id} game={gms}/>
    )}
    </div>
  )
}

export default Cards
