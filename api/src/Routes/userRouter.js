const {Router} = require('express');
const {pepito, tukis} = require('../Handlers/userHandlers')

const userRouter = Router();

userRouter.get('/', pepito)
userRouter.post('/', tukis)


module.exports= userRouter;