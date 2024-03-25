import axios from 'axios';
const url2 = import.meta.env.VITE_URL2;


export const GAMES='GAMES';
export const DETAILS='DETAILS';
export const PAGESNUM = 'PAGESNUM'


export const getCharacters =(page, token)=> async(dispatch)=>{
    try {
        const response = await axios(`/game?page=${page}`,{
                headers: {
                    Authorization: `Bearer ${token}`,
                },
              
        });
         dispatch({
            type:GAMES,
            payload: response.data
        });
        dispatch({
            type:PAGESNUM,
            payload:page,
        });
    } catch (error) {
        console.error('Error fetching data')
        alert('Error fetching data')
    }
}
export const getByid =(id, token)=>async(dispatch)=>{
    try {
        const response= await axios(`/game/${id}`,{
        headers: {
            Authorization: `Bearer ${token}`,
        }
        },);
        console.log(response)
        return dispatch({
            type:DETAILS,
            payload:response.data,
        })
    } catch (error) {
        console.error('Error fetching detail')
        alert('Error fetching detail')
    }
}

