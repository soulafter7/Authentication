// เรียกใช้งาน environment variable
require('dotenv').config();


// เรียกใช้งาน express module 
const express = require('express');
var helmet = require("helmet");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger_output.json');
const bodyParser = require('body-parser');
const knexConfig = require('./db/knexfile.js');
//initialize knex
const knex = require('knex')(knexConfig.connection)
var cors = require('cors')

var moment = require('moment-timezone');
var indexRouter = require('./routes/index');
moment().tz("Asia/Bangkok").format();

let app = express();

// ใช้ Express Middleware ในการรับ json 
app.use(express.json());
// ใช้ Express Middleware ในการรับ form data
//app.use(express.urlencoded({ extended: true }));

swaggerUi.setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.disable("x-powered-by");
app.use(indexRouter);

// app.use((req, res, next)=>{
//     console.log(`Got a request, ${new Date()}`)
//     next();
// })

//# CORS Scope
// -- allow all --//
var req_origin = null
var req_header_host = null
var req_method = null
app.use((req, res, next) => {
  req_origin = req.get('origin') || req.headers['cf-connecting-ip']
  req_header_host = req.headers['host']
  req_method = req.method
  next()
})

var whitelist = ['*']
var corsOptions = {
  origin: function (origin, callback) {
    if (req_method == "GET") {
      callback(null, true)
    } else {
      if (whitelist.indexOf(req_origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    }
  }
}

const PORT = process.env.PORT


// กำหนด port และเริ่มการทำงาน
app.listen(PORT, ()=>{
    console.log(`server is running at port http://localhost:${PORT}`);
})