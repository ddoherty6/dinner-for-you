var sendMail = function(userName, userEmail) { // using EasyMail API

  // email is sent successfully
  
  meal = $("#meal").text();  
  bodyText = writeMail();

  var mailInfo = { 
    from: {
        name: "Dinner For You",
        address: "recipe@dinnerforyou.com"
    },
    to: {
        name: userName,
        address: userEmail,
    },
    subject: meal,
    message: bodyText
  }

  var form= JSON.stringify(mailInfo);

  const settings = { // API information object
    "async": true,
    "crossDomain": true,
    "url": "https://easymail.p.rapidapi.com/send",
    "method": "POST",
    "headers": {
        "content-type": "application/json",
        "x-rapidapi-host": "easymail.p.rapidapi.com",
        "x-rapidapi-key": "61f7e1e89amsh916d43089bd98bep10b853jsn09283b1f8040"
    },
    "processData": false,
    "data": form
  };

  $.ajax(settings).done(function (response) {
    
    if (response.success) {

      // email is sent successfully
      $('#message').text("Email sent successfully!");
      $('#message').addClass("email-sent");

    } else {
      // email send fails
      $('#message').text("Email was unsuccessful :(");
      $('#message').addClass("email-fail");

    }
  }); 
}

var writeMail = function() { // creates text content of HTML email

  meal = $("#meal").text();
  category = $("#category").text();
  region = $("#area").text();

  ingredients = $("#in").children();
  measurements = $("#me").children();
  tableRows = Array();
  ingredientEL = 0;
  var measureEl = 0;
  var tableEl = 0;

  for (var i = 0; i < $("#in").children().length || i < $("#in").children().length; i++) { //elements of ingredient table

    tableEl = $("#in").children()[i];
    measureEl = $("#me").children()[i];
    tableRows[i] = "<tr><td>" + tableEl.innerText + "</td><td>" + measureEl.innerText + "</td></tr>";

  }

  var headers = "<h1>"+meal+"</h1><h2>"+region+"</h2><h3>"+category+"</h3><h4>Ingredients</h4>"; // construct email as html elements
  var ingredientTable = "<table>"+tableRows.join("")+"</table>";                                 //
  var instructions = "<h4>Instructions</h4><p>" + $("#mea p").text() + "</p>";                   //
  var footer = "<p>&copy; Dinner For You LLC Infinity</p>"                                       //

  var bodyText = headers + ingredientTable + instructions + footer; // assemble parts of email into final body

  return bodyText;
}

// modal UI triggers

$(document).ready(function() {
  $('.modal').modal({ // passing object to modal fucntion in materialize
      onCloseStart: function(modal, trigger) {
      $('#message').text(""); //clear message for next time
      $('#message').attr("class", "helper-text");
      
    }
  });
});

$("#send").on("click", function() { // pulls name and email from modal, sends the email
  var name = $("#name").val();
  var email = $("#email").val();
  

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) { // validating email address using regular expression
    
    // email address is validated:
  
    $('#message').text("Email validated, sending...");
    $('#message').attr("class", "helper-text"); // alert the user we are sending the email

    sendMail(name, email); //send the email

  } else {
    // email address fails validation:
    $('#message').text("Email is invald. Please enter a valid Email address.");
    $('#message').addClass("email-fail");
  }
});

