'use static'


const path = require('path');
const express = require('express');
const urlencoded = require('body-parser').urlencoded;
const text = require('./sendText');

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {

  response.sendFile(path.join(__dirname, 'public', 'index.html'));

});

app.post('/', (request, response) => {
  const name = `${request.body.firstName} ${request.body.lastName}`;
  const email = request.body.email;
  const pNumber = request.body.phoneNumber;

  text.sendText(name, pNumber, email);
});

app.listen(3000);