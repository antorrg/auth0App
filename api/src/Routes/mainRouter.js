const {Router} = require('express');
const gameRouter = require('./gameRouter');
const userRouter = require('./userRouter');

mainRouter = Router();

mainRouter.use(gameRouter);
mainRouter.use(userRouter);

module.exports = mainRouter;