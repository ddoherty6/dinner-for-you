var sendMail = function(userName, userEmail) {

  var mailInfo = {
    from: {
        name: "Dinner For You",
        address: "recipe@dinnerforyou.com"
    },
    to: {
        name: userName,
        address: userEmail,
    },
    subject: "This is the mail subject",
    message: "Hello John, how are you ?"
  }
  var form= JSON.stringify(mailInfo);

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
}