//this file connect in database 
const mysql = require('mysql2')

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "nodecrud"
});

db.connect(()=>{
    console.log('connect to database successfully..')
})

module.exports = db;