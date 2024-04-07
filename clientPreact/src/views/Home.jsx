import axios from 'axios'
import{ useEffect, useState} from 'preact/hooks'
import {useDispatch, useSelector }  from 'react-redux';
import NavBar from '../components/NavBar'
import Cards from '../components/Cards'
import {getCharacters}from '../redux/actions'

const Home = () => {
  const dispatch = useDispatch();
  const games = useSelector((state)=>state.character)
  const currentPage = useSelector((state)=>state.currentPage);
  const guide = currentPage? currentPage : 1;
  const [page, setPage]= useState(guide)
  const totalPages = useSelector((state)=>state.pageNumber)
  const token = localStorage.getItem('accessToken')
 //console.log(token)
  useEffect(()=>{
    dispatch(getCharacters(page, token));
  },[dispatch, page])

//console.log(games)

  return (
    <div>
    <NavBar page={page} setPage ={setPage} finalPage = {totalPages}/>
    <Cards game = {games}/>
    </div>
  )
}

export default Home