'use static'

const http = require('http');
const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {

  response.sendFile(path.join(__dirname, 'public', 'index.html'));

});

app.listen(3000);