require('dotenv').config();

module.exports = {
    server: {
        host: process.env.HOST,
        port: process.env.PORT
    },
    db: {
        host: process.env.PGHOST,
        port: process.env.PGPORT,
        user: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE,
        ssl: process.env.PGSSLMODE,
        securitykey: process.env.SECURITY_KEY
    }
}
