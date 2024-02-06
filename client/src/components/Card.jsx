import React from 'react';
import {NavLink} from 'react-router-dom'
import style from './styles/Card.module.css'

const Card = ({game}) => {
  const {id,title,thumbnail, genre, }=game;
  console.log(title)
  return (
    <div key = {id} className={style.myCard}>
      <div className={style.innerCard}>
        <div className={style.frontSide}>
      <img src={thumbnail} alt ={title} className={style.image}/>
      <NavLink to = {`/home/${id}`}>{title}</NavLink>
      <h5>Genre: {genre}</h5>
      </div>
      </div>
      
    </div>
  )
}

export default Card
// id,title, thumbnail,short_description, game_url,genre,platform, publisher, developer,release_date, freetogame_profile_url