const { icrmconnection } = require('../config/config.js');
const ICRM_sql = require('mssql');

const ICRM_connection = {
  user: icrmconnection.DB_USER,
  password: icrmconnection.DB_PASSWORD,
  database: icrmconnection.DB_NAME,
  server: icrmconnection.DB_HOST,
  requestTimeout: Number(icrmconnection.DB_Timeout_Total),
  "options": {
    "encrypt": false,
    "enableArithAbort": true
    }
};

module.exports = { ICRM_sql, ICRM_connection };

