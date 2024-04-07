const {Router} = require('express');
const {gameHandler, gameHandlerDetail, createdGame}= require('../Handlers/gameHandlers');
gameRouter = Router();

gameRouter.get('/game',   gameHandler)
gameRouter.get('/game/:id',   gameHandlerDetail)
gameRouter.post('/game', createdGame)


module.exports= gameRouter;