const getGames = require('../Controllers/gamesControllers')

const gameHandler= async(req, res)=>{
 try {
    const response = await getGames();
    res.status(200).json(response);
 } catch (error) {
    res.status(400).json({error:error.mesagge});
 }
}

const gameHandlerDetail = async(req, res)=>{
    const {id}= req.params;
    try {
        const response = await console.log('estoy sin definir aun');
        res.status(200).json(response);
     } catch (error) {
        res.status(400).json({error:error.mesagge});
     }
}
module.exports = {
    gameHandler, 
    gameHandlerDetail
};