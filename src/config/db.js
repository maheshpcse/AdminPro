// const Pool = require('pg-pool');
const Pool = require('pg');
const config = require('./config.js');

var connection = new Pool.Client({
    host: config.db.host,
    port: config.db.port,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database,
    ssl: config.db.ssl === true,
    max: 20, // set pool max size to 20
    min: 4, // set min pool size to 4
    idleTimeoutMillis: 100000, // close idle clients after 1 second
    connectionTimeoutMillis: 100000, // return an error after 1 second if connection could not be established
});

// connection.connect(function(err, result){
//     if(err) {
//         console.log("Failed to connect database?", err);
//     }
//     else {
//         console.log("Database connection established successfully!");
//     }
// })

module.exports = connection;
