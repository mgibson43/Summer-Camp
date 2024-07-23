require('dotenv').config();
const client = require('twilio')();

function sendText(name, number, email) {
  client.messages
  .create({
    body: `
    ${name}\n\n${number}\n\n${email}`,
    messagingServiceSid: 'MGb8f051339add4faf1a5a194ef57814dd',
    to: '+15406414804'
  })
  .then(message => console.log(message.sid));
}

module.exports = { sendText };