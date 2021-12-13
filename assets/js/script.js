var    d= {
  from: {
      name: "Example",
      address: "info@example.com"
  },
  to: {
      name: "John Doe",
      address: "llyybb80@gmail.com"
  },
  subject: "This is the mail subject",
  message: "Hello John, how are you ?"
}
var form= JSON.stringify(d)
const settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://easymail.p.rapidapi.com/send",
  "method": "POST",
  "headers": {
      "content-type": "application/json",
      "x-rapidapi-host": "easymail.p.rapidapi.com",
      "x-rapidapi-key": "79bc5e5863msh3ef58438b7034ddp1e35ddjsn2401862fc36a"
  },
  "processData": false,
  "data":form
};
$.ajax(settings).done(function (response) {
  console.log(response);
});
