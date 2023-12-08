const { DataTypes } = require('sequelize')
const sequelize = require('../config/db')

const User = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },

}, {
    timestamps: false,
    //this means name of table in database the same name model this define('users')
    freezeTableName: true

});

module.exports = User
