const axios = require('axios');

require ('dotenv').config();
const {URL}= process.env;


const getGames = async()=>{
    try {
        const response = await axios(`${URL}`);
        const data = response.data;
        if(!data){throw new Error('No se pudo conectar')}
        return data;
    } catch (error) {
        throw error;
    }
}

module.exports = getGames;