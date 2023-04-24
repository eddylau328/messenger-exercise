// import express library
const express = require('express');
// import path library
const path = require('path');

// import the local storage 
const LocalStorage = require('./localstorage');

// create express object
const app = express()
// create storage object
const storage = new LocalStorage()

// setup middleware layer
app.use(express.json());

// prevent 304
app.use(function(req, res, next) {
  req.headers['if-none-match'] = 'no-match-for-this';
  next();    
});

/*
  APIs setup
  
  POST /message - create a message
  GET  /message - get a list of messages
  GET  /        - get website home page

*/

// POST /message - create a message
app.post('/message', async (req, res) => {
  if (!req.body.message || !req.body.sender) {
    res.status(400).send();
  }
  storage.addData(req.body.message, req.body.sender);
  res.status(201).send();
})

// GET /message - get the message list
app.get('/message', (req, res) => {
  res.status(200).send(storage.getData());
})

// GET / - get the home page
app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "web/index.html"));
});

// start server by listening to port 3000
const port = 3000
app.listen(port, () => {
  console.log(__dirname);
  console.log(`Listening in port ${port}`)
});
