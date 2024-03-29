const {getGames, getById, insertGame} = require('../Controllers/gamesControllers')

const gameHandler= async(req, res)=>{
   const page = req.query.page || 1;
 try {
    const response = await getGames(req,page);
    res.status(200).json(response);
 } catch (error) {
    res.status(400).json({error:error.message});
 }
}

const gameHandlerDetail = async(req, res)=>{
    const {id}= req.params;
    try {
        const response = await getById(id);
        res.status(200).json(response);
     } catch (error) {
        res.status(400).json({error:error.message});
     }
}
const createdGame = async(req, res)=>{
   const {id,title, thumbnail,short_description, game_url,genre,platform, publisher, developer,release_date, freetogame_profile_url}=req.body;
   try {
      const response = await insertGame(id,title, thumbnail,short_description, game_url,genre,platform, publisher, developer,release_date, freetogame_profile_url);
      res.status(201).json(response);
   } catch (error) {
      res.status(400).json({error:error.message});
   }
};

module.exports = {
    gameHandler, 
    gameHandlerDetail,
    createdGame
};