
// SET THE environment variables. See http://twil.io/secure
// require('dotenv').config();
// console.log("hello");

const accountString = "AC5e7ccb84fb554959681dfb90d58ed619";
const tokenString = "f30a3fd6b843a91d091fc39ee32ccb3a";

const accountSid = accountString; // SK038e686467bd4cf0d28cba9c6bea6f83
const authToken = tokenString; // some other auth: o557Khe6cmkxt3VXCPA7Frv5B7ScDKDo

require(['twilio'], function(twilio){
 const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+14752557437',
     to: '+16178238674'
   })
  .then(message => console.log(message.sid))
});


  ///research environment vars