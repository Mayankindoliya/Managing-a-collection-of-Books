require('dotenv').config();

const express = require('express');
const middlewares = require('./helpers/middlewares')

const app = express();

app.use(express.json);



// Error handler Middleware: 
app.use(middlewares.errorHandlersMiddlerware); 


const mongoose = require('mongoose');
// Database & Server Connection!
mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('Databse is Connected(())')
    app.listen(3000, () => {
      console.log('Server is Connected (())')
    })
  })
  .catch((err) => {
    console.log(err)
  })