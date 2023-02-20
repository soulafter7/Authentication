const { crmconnection } = require('../config/config.js');
const CRM_sql = require('mssql');

const CRM_connection = {
  user: crmconnection.DB_USER,
  password: crmconnection.DB_PASSWORD,
  database: crmconnection.DB_NAME,
  server: crmconnection.DB_HOST,
  requestTimeout: Number(crmconnection.DB_Timeout_Total),
  "options": {
    "encrypt": false,
    "enableArithAbort": true
    }
};

module.exports = { CRM_sql, CRM_connection };