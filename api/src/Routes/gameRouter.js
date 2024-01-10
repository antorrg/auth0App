const {Router} = require('Router');
const {gameHandler, gameHandlerDetail}= require('../Handlers/gameHandlers');

gameRouter = Router();

gameRouter.get('/game', gameHandler)
gameRouter.get('./game/:id', gameHandlerDetail)


module.exports= gameRouter;