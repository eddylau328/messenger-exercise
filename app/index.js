// import express library
const express = require('express');
// create express object
const app = express()

/*
  APIs setup
  
  POST /message - create a message
  GET  /message - get a list of messages
  GET  /        - get website home page

*/

// start server by listening to port 3000
const port = 3000
app.listen(port, () => {
  console.log(`Listening in port ${port}`)
});
