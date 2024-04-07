const {Videogame}=require('../database')


const getGames = async (req, page) => {
    try {
        //const page = req.query.page || 1;
        const pageSize = 12;

        const offset = (page - 1) * pageSize;

        const gameFound = await Videogame.findAll({
            limit: pageSize,
            offset: offset
        });

        if (gameFound.length === 0) {
            throw new Error('This table is empty');
        } else {
            const totalCount = await Videogame.count();
            const totalPages = Math.ceil(totalCount / pageSize);

            const responseData = {
                info: {
                    count: totalCount,
                    pages: totalPages,
                    next: nextPageUrl(req, totalPages, page),
                    prev: prevPageUrl(req, totalPages, page)
                },
                results: gameFound
            };

            return responseData;
        }
    } catch (error) {
       throw error;
    }
};

const nextPageUrl = (req, totalPages, currentPage) => {
    if (currentPage < totalPages) {
        //console.log(currentPage+' soy en next')
        const nextPage = Number(currentPage) + 1
        //console.log(nextPage+' soy nextPage')
        return `${getBaseUrl(req)}?page=${parseInt(nextPage,10)}`;
    }
    if(currentPage === totalPages){
        return null;
    }
};

const prevPageUrl = (req, totalPages, currentPage) => {
    if (currentPage > 1) {
        //console.log(currentPage+' soy page')
        let prevPage = Number(currentPage) - 1;
        return `${getBaseUrl(req)}?page=${parseInt(prevPage, 10)}`;
    }
    if(currentPage ===1){
        return null;
    }
};

const getBaseUrl = (req) => {
    return `${req.protocol}://${req.get('host')}${req.baseUrl}${req.path}`;
};

//===================================================================================
const getById = async(id)=>{
    try {
        const gameFound = await Videogame.findByPk(id,{
            where: {
                deletedAt: false,
            }
        });
        if(!gameFound){
            throw new Error('This game do not exist')
        }else{
            const data = gameFound;
            return data;
        }
    } catch (error) {
        throw error;
    }
}

const insertGame = async(id,title, thumbnail,short_description, game_url,genre,platform, publisher, developer,release_date, freetogame_profile_url)=>{
    try {
        const gameFound = await Videogame.findByPk(id, {
            where:{
                deleteAt:false,
            },
        });
     if(gameFound){
        throw new Error('This game already exists')
    }else{
        try {
            const data = gameFound.create({
                id:id,
                title: title,
                thumbnail: thumbnail,
                short_description: short_description,
                game_url: game_url,
                genre: genre,
                platform: platform,
                publisher: publisher,
                developer: developer,
                release_date: release_date,
                freetogame_profile_url: freetogame_profile_url,
            });
            return data;
        } catch (error) {
            throw new Error('Error creating game!!')
        }
    }
     
    } catch (error) {
        throw error;
    }
}
module.exports = {
    getGames, 
    getById,
    insertGame
};