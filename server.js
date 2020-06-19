//import 
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

//import config.env file
dotenv.config({ path: './config/config.env' });

//import router file
const transactions = require('./routes/transactions');

//init
const app = express();

//get request
//app.get('/', (req, res) => res.send('Hello World from Express'));

//now we get this code from router
app.use('/api/v1/transactions', transactions);

const PORT = process.env.PORT || 5000;

//to run this server we have to listen our server
//app.listen();

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));

