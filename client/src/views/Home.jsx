import axios from 'axios'
import{ useEffect, useState} from 'react'
import NavBar from '../components/NavBar'
import Cards from '../components/Cards'

const Home = () => {
  const [games, setGames]= useState([]);
  const data = async()=>{
    try {
      const response = await axios(`/game`);
      const game = response.data.results;
      console.log(game)
     setGames(game);
    } catch (error) {
      throw error;
    }
  }
  useEffect(()=>{
    data();
  },[])

console.log(games)

  return (
    <div>
    <NavBar/>
    <Cards game = {games}/>
    </div>
  )
}

export default Home