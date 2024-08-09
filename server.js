'use static'

const path = require('path');
const express = require('express');
const cors = require('cors');
const urlencoded = require('body-parser').urlencoded;
const text = require('./sendText');

const app = express();

app.use(express.json());
app.use(cors());
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

  response.status(200).sendFile(path.join(__dirname, 'public', 'confirmation.html'));
});

app.listen(3000);