require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { databaseService } = require('./databaseService');
const {leerEmpleados} = require('./databaseService.js');


app.use(cors())

app.use(bodyParser.json());


app.get('/', async (req, res) => {
  console.log(leerEmpleados)
  
});



// Middleware de CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

require('./routes')(app, databaseService());

app.listen(3003, () => {
  console.log('App listening on port http://localhost:3003');
});







