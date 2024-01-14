const {DataTypes}= require ('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Videogame',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey:true,
        },
        title:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        thumbnail:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        short_description:{
            type:DataTypes.TEXT,
            allowNull:false,
        },
        game_url:{
            type: DataTypes.STRING,
            allowNull:true,
        },
        genre:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        platform:{
            type:DataTypes.STRING,
            allowNull:false,
        }, 
        publisher:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        developer:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        release_date:{
            type:DataTypes.DATEONLY,
            allownull:false,
        },
        url_profile:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        price:{
            type: DataTypes.DECIMAL(7,2),
            allowNull: false,
        },
        enable:{
            type: DataTypes.BOOLEAN,
            defaultValue:true
        },
        deleteAt:{
            type: DataTypes.BOOLEAN,
            defaultValue:false
        }  

    })
}
