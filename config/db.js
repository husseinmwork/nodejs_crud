//this file connect in database 
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodecrud', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql', 
  });

//not need this 
sequelize
  .authenticate()
  .then(() => {
    console.log('connect database successfully ..');
  })
  .catch(err => {
    console.error("error to connect database :", err);
  });

module.exports = sequelize;