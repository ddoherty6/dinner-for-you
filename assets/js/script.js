var sendMail = function(userName, userEmail) {

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

  for (var i = 0; i < $("#in").children().length || i < $("#in").children().length; i++) {

    tableEl = $("#in").children()[i];
    

    measureEl = $("#me").children()[i];


    tableRows[i] = "<tr><td>" + tableEl.innerText + "</td><td>" + measureEl.innerText + "</td></tr>";

  }

  var headers = "<h1>"+meal+"</h1><h2>"+region+"</h2><h3>"+category+"</h3><h4>Ingredients</h4>";

  var ingredientTable = "<table>"+tableRows.join("")+"</table>";
  console.log(ingredientTable);

  var instructions = "<h4>Instructions</h4><p>" + $("#mea p").text() + "</p>";

  var footer = "<p>&copy; Dinner For You LLC Infinity</p>"

  var bodyText = headers + ingredientTable + instructions + footer;

  return bodyText;
}


$('.modal').click(function() {
  $("#modal1").show();
});

// modal was triggered
$(".modal").on("show.bs.modal", function() {
  // clear values
  $(".modal-close .waves-effect .waves-green .btn-flat").val("");
});

// modal is fully visible
$(".modal").on("shown.bs.modal", function() {
  // highlight textarea
  $(".modal-close .waves-effect .waves-green .btn-flat").trigger("focus");
}); 