const {Router} = require('express');
const {gameHandler, gameHandlerDetail}= require('../Handlers/gameHandlers');

gameRouter = Router();

gameRouter.get('/game', gameHandler)
gameRouter.get('./game/:id', gameHandlerDetail)


module.exports= gameRouter;