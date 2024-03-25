const axios = require('axios')
require('dotenv').config()
const {URL}= process.env

const morty= async()=>{
    try {

        const response = await axios.get(`${URL}/users`)
        if(!response){throw new Error('aca no hay nada')}
        const data = response.data;
        return data;
    } catch (error) {
        throw error;
    }
}
const posteo = async(userId, id, title, body)=>{
    try {
        const response = await axios.post(`${URL}/posts`,{userId, id, title, body});
        const data = response.data;
        if(!data){throw new Error('algo paso')}
        return data
    } catch (error) {
        throw error;
    }
}

module.exports= {morty, posteo}