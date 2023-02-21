
const knex = require('knex')({
    client: 'mssql',
    // version: '7.2',
    connection: {
      host : process.env.DB_HOST,
      port : process.env.DB_PORT,
      user : process.env.DB_USER,
      password : process.env.DB_PASS,
      database : process.env.DB_NAME
    },
    pool: { min: 0, max: 30, acquireTimeoutMillis: 60 * 1000 },
  });

module.exports={
    knex
}