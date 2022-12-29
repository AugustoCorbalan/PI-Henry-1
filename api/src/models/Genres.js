const { DataTypes } = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('Genres',{
        name:{
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        }
    });
};