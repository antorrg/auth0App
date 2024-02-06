//todo         .d8b.  d8b   db d888888b  .d88b.  d8888b. d8888b.  d888b  
//todo        d8' `8b 888o  88 `~~88~~' .8P  Y8. 88  `8D 88  `8D 88' Y8b 
//todo        88ooo88 88V8o 88    88    88    88 88oobY' 88oobY' 88      
//todo        88~~~88 88 V8o88    88    88    88 88`8b   88`8b   88  ooo 
//todo        88   88 88  V888    88    `8b  d8' 88 `88. 88 `88. 88. ~8~ 
//todo        YP   YP VP   V8P    YP     `Y88P'  88   YD 88   YD  Y888P  
//                                                                                   
//?                 o  8      .oPYo.                                                  o  
//?                 8  8      8  .o8                                                  8  
//? .oPYo. o    o  o8P 8      8 .P'8       .oPYo. oPYo. .oPYo. o    o .oPYo. .oPYo.  o8P 
//? .oooo8 8    8   8  8oPYo. 8.d' 8 ooooo 8    8 8  `' 8    8 8    8 8oooo8 8    '   8  
//? 8    8 8    8   8  8    8 8o'  8       8    8 8     8    8 8    8 8.     8    .   8  
//? `YooP8 `YooP'   8  8    8 `YooP'       8YooP' 8     `YooP' `YooP8 `Yooo' `YooP'   8  
//? :.....::.....:::..:..:::..:.....:::::  8 ....:..:::::.....:     8 :.....::.....:::..:
//? :::::::::::::::::::::::::::::::::::::  8 ::::::::::::::::::  ooP'.:::::::::::::::::::
//? :::::::::::::::::::::::::::::::::::::::..::::::::::::::::::::...:::::::::::::::::::::                   
//* :::::::::::::::::::::  App creada el día 09/01/2024  ::::::::::::::::::::::::::::::::                        

const server = require('./src/server');
const {sequelize} = require('./src/database');
const fillTables = require('./src/Controllers/initial/insert');
require ('dotenv').config();
const {PORT}=process.env;



server.listen(PORT, async ()=>{
    try {
        await sequelize.sync({force:false});
        await fillTables();
        console.log(`Server is listening in port ${PORT} ✅` );
    } catch (error) {
        console.error('Error syncing database', error.message)
    }
})