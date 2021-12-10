
// SET THE environment variables. See http://twil.io/secure
// require('dotenv').config();
const accountString = "AC5e7ccb84fb554959681dfb90d58ed619";
const tokenString = "o557Khe6cmkxt3VXCPA7Frv5B7ScDKDo";

const accountSid = accountString; // SK038e686467bd4cf0d28cba9c6bea6f83
const authToken = tokenString; // o557Khe6cmkxt3VXCPA7Frv5B7ScDKDo
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+14752557437',
     to: '+16178238674'
   })
  .then(message => console.log(message.sid));


  ///research environment vars