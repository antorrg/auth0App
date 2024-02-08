import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {useParams, useNavigate} from 'react-router-dom';
import { getByid } from '../redux/actions';
import GenericButton from '../components/Buttons/GenericButton'

const Detail = () => {
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const data = useSelector((state)=>state.charById)
  const {id} = useParams();
  console.log(data)

  const goBack = ()=>{
    navigate(-1);
  }

  useEffect(()=>{
    dispatch(getByid(id));
  },[id])

  return (
    <div>
      <img src={data.thumbnail} alt={data.title}/>
      <h4>{data.title}</h4>
      <p>Description: {data.short_description}</p>
      <p>Genre: {data.genre}</p>
      <p>Platform: {data.platform}</p>
      <p>Publisher: {data.publisher}</p>
      <p>Developer: {data.developer}</p>
      <GenericButton onClick= {goBack} buttonText={'Go Back'}/>
    </div>
  )
}

export default Detail