import { useEffect } from "react";
import styles from "./Detail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getByid } from "../../redux/actions";
import GenericButton from "../../components/Buttons/GenericButton";

const Detail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.charById);
  const { id } = useParams();
  //console.log(data);
  const imagen = data?.thumbnail ?? `${import.meta.env.VITE_BACKGROUND}`;
const token= localStorage.getItem('accessToken')
//console.log('yo soy token',token)

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(getByid(id, token));
  }, [id]);

  return (
    <div  className={styles.detail} style={{backgroundImage: `url(${imagen})`}}>
      <div className={styles.infoContainer}>
        <img src={data.thumbnail} alt={imagen}/>
        <div className={styles.data}>
        <h4>{data.title}</h4>
        <p>Description: {data.short_description}</p>
        <p>Genre: {data.genre}</p>
        <p>Platform: {data.platform}</p>
        <p>Publisher: {data.publisher}</p>
        <p>Developer: {data.developer}</p>
        </div>
        <GenericButton onClick={goBack} buttonText={"Go Back"} />
      </div>
    </div>
  );
};

export default Detail;
