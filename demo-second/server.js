require('dotenv').config() //allow us to pull environment variables from .env
//nodemon allows us to automatically restart server
const express = require('express')
const app = express() //useful for creating app using node.js
//connect mongoose database
const mongoose = require('mongoose') //allows interact with mongodatabase easily

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true})

  //check if database working properly
  const db = mongoose.connection
  db.on('error', (error) => console.error(error))
  db.once('open', () => console.log('Connected to Database'))
  

  //set up server to accept Json
  app.use(express.json())

  //set up routes
  const subscribersRouter = require('./routes/subscribers')  //routes all sub info
  app.use('/subscribers', subscribersRouter)



app.listen(8080, () => console.log('Server started on port 8080'))