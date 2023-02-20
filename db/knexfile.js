const { AuthenticationConnection } = require('../config/config.js');
const path = require('path');
const ConnectDB = require('knex');

//dotenv.config();
// Update with your config settings.
var knex = {
  client: 'mssql',
  connection: {
    host: '192.168.4.157',
    user: 'revo',
    password: 'P@ssw0rd',
    database: 'Authentication',
    port: '1433'
  },
  pool: { min: 0, max: 7 }
}

// var knex = require('knex')({
//     client: 'mssql',
//     connection: {
//       host: '127.0.0.1',
//       user: 'CrifferV',
//       password: 'P@ssw0rd',
//       database: 'Authentication',
//       options: {
//         port: 1433
//       }
//     },
//     pool: { min: 0, max: 7 }
//   })

  // var knex = require('knex')({
  //   client: 'mssql',
  //   connection: {
  //     host: Authenticationconnection.DB_HOST,
  //     user: Authenticationconnection.DB_USER,
  //     password: Authenticationconnection.DB_PASSWORD,
  //     database: Authenticationconnection.DB_NAME,
  //     options: {
  //       port: Authenticationconnection.DB_PORT
  //     }
  //   },
  //   pool: { min: 0, max: 7 }
  // })
  // ============ TEST CONNECTION ===============
  // knex.select('*').from('Employees')
  // .then(function(dept){
  //   dept.forEach(function(dept){
  //       console.log(dept);
  //   });
  // }).catch(function(err){
  //   console.log(err); ; knex.destroy(); 
  // }).finally(function(){
  //   knex.destroy(); 
  // });
  // =============== END ========================

 module.exports = { connection: knex };