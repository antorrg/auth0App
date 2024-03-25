const {morty, posteo} = require ('../Controllers/userControllers')

const pepito= async(req, res)=>{
    try {
        const response = await morty();
        res.status(200).json(response)
    } catch (error) {
        console.log('a ver que pasa')
        res.status(400).json({error:error.message})
    }
}
const tukis =async(req, res)=>{
    const {userId, id, title, body}=req.body;
    try {
        const response = await posteo(userId, id, title, body);
        res.status(201).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = {pepito, tukis}