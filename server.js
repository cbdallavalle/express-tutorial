const express = require('express');
const mockData = require('./public/mockData.js');
const app = express();
const urlLogger = (request, response, next) => {
  console.log('Request URL:', request.url);
  next();
}
const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());
  next();
}

app.use(urlLogger, timeLogger);
app.use(express.static('public'));
app.use((req, res, next) => {
  res.status(404).send("404 NOT FOUND SUCKS TO SUCK")
})

app.get('/json', (request, response) => {
  response.status(200).json(mockData.mockData);
});

app.get('/sunsets', (request, response) => {
  response.sendFile('/Users/casey/Turing/mod4/prework/intro-express/public/sunset1.jpeg');
})

app.listen(3000, () => {
  console.log('Express intro running on localhost:3000');
});
