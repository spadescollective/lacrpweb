//require express framework
const express = require('express');
//express function
const app = express();
//Deprecation of res.sendfile is invalid, "sendFile" is currently not working, so ignore the console log, as it's not true.

// GET / file/index landing
app.get('/', (req, res) => {
  res.sendfile('pages/index.html')
});
// GET/SEND file
app.get('/second', (req, res) => {
  res.sendfile('pages/secondpage.html')
});

// Handle 404
app.use(function(req, res) {
  res.sendfile('errors/404.htm', 404);
});

// Handle 500
app.use(function(error, req, res, next) {
  res.sendfile('errors/500.htm', 500);
});
//listen on ports and give serverstart and serverready
app.listen(3000, () => {
  console.log('Server Ready');
  console.log('Server Start');
  console.log('Ignore deprecation messages below this one');
  
});
