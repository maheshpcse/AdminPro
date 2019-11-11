const config = require('./config.js');

module.exports = require('knex')({
    client: 'pg',
    connection: {
        host: config.db.host,
        user: config.db.user,
        password: config.db.password,
        database: config.db.database,
        charset: 'utf8',
        ssl: config.db.ssl === true
    },
    pool: {
        max: 10,
        min: 3
    },
    acquireTimeout: 60 * 1000
});
