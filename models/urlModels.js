const { Model, DataTypes } = require('sequelize');
const createDB = require('./config/db');

class URL extends Model {   } ;

URL.init(
    {
        longURL: {
            type: DataTypes.STRING,
            allowNull: false
        },
        shortURL:{
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize , modelName: "URL",
    }
);

module.exports = URL;