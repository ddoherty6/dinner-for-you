
 
var i = 0;	
var mealName;
var arr=[];

		//old recipe
$(document).each(function(){  
    $('#oildrecipe').empty();
    for(j=0;j<localStorage.length;j++){
            var value = localStorage.getItem(j,value);
            $(this).val(value);
           arr.push(value);
		//    console.log(JSON.parse(value));
		   var info=JSON.parse(value);
			$('#oildrecipe')
			.append('<li><a value type="button" href target="_blanck" class="btn btn-danger btn-lg" data-mdb-ripple-color="#be8989 oldRecipeMeal" id="oldRecipeMeal">'
			+ info.mealname +'</a></li>');
    }
    
}); 
      /// targting old recipe
$(document).on('click','#oldRecipeMeal', function (e) {     
	var v = $(this).text();
	e.preventDefault();
	console.log(v);
	v.replace("%20", '');
	console.log(v);
	oldRecipeFun(v);
  
});



var sendMail = function(userName, userEmail) {
	meal = $("#meal").text();
	catagory = $("#category").text();
	region = $("#area").text();
	ingredients = $("#in").html();
	measurements = $("#me").html();
	instructions = $("#mea p").text();
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

function oldRecipeFun(recipeName){

	$.ajax({url: `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`, 
	success: function(result){
	console.log(result);

		// meal name
		$("#meal").empty();
	$('#meal').append(result.meals[0].strMeal)
	mealName=result.meals[0].strMeal;
	//category
	$("#category").empty();
	$('#category').append(result.meals[0].strCategory)

	//area
	$("#area").empty();
	$('#area').append(result.meals[0].strArea)


					///// Ingredient
	$("#in").empty();
	$('#in').append('<li>  '+result.meals[0].strIngredient1+'</li>');
	$('#in').append('<li>  '+result.meals[0].strIngredient2+'</li>');
	$('#in').append('<li>  '+result.meals[0].strIngredient3+'</li>');
	$('#in').append('<li>  '+result.meals[0].strIngredient4+'</li>');
	$('#in').append('<li>  '+result.meals[0].strIngredient5+'</li>');
	$('#in').append('<li>  '+result.meals[0].strIngredient6+'</li>');
	$('#in').append('<li>  '+result.meals[0].strIngredient7+'</li>');
	$('#in').append('<li>  '+result.meals[0].strIngredient8+'</li>');
	$('#in').append('<li> '+result.meals[0].strIngredient9+'</li>');
	$('#in').append('<li>  '+result.meals[0].strIngredient10+'</li>');
	$('#in').append('<li>  '+result.meals[0].strIngredient11+'</li>');
	$('#in').append('<li>  '+result.meals[0].strIngredient12+'</li>');
	$('#in').append('<li>  '+result.meals[0].strIngredient13+'</li>');
	$('#in').append('<li>  '+result.meals[0].strIngredient14+'</li>');
	$('#in').append('<li>  '+result.meals[0].strIngredient15+'</li>');
	$('#in').append('<li>  '+result.meals[0].strIngredient16+'</li>');
	$('#in').append('<li>  '+result.meals[0].strIngredient17+'</li>');
	$('#in').append('<li>  '+result.meals[0].strIngredient18+'</li>');
	$('#in').append('<li>  '+result.meals[0].strIngredient19+'</li>');
	$('#in').append('<li>  '+result.meals[0].strIngredient20+'</li>');

				// Ingredient to string
				var ing = $("#in li").map(function() {
					return this.textContent.trim();
				  }).get();
				  var ingre=(JSON.stringify(ing, 0, 3))
				  console.log(ingre);
				  var ingredient=JSON.parse(ingre);
				  var ingredIent =ingredient.filter(n => n)
				  ingredIent=ingredIent.join(", ")
				  console.log(ingredIent);


							//Instructions
							$("p").empty();
	$('p').append(result.meals[0].strInstructions);
	// $('p').append(result.meals[0].strInstructions);

					//Measure
	$("#me").empty();
	$('#me').append('<li>'+result.meals[0].strMeasure1+'</li>');
	$('#me').append('<li>'+result.meals[0].strMeasure2+'</li>');
	$('#me').append('<li>'+result.meals[0].strMeasure3+'</li>');
	$('#me').append('<li>'+result.meals[0].strMeasure4+'</li>');
	$('#me').append('<li>'+result.meals[0].strMeasure5+'</li>');
	$('#me').append('<li>'+result.meals[0].strMeasure6+'</li>');
	$('#me').append('<li>'+result.meals[0].strMeasure7+'</li>');
	$('#me').append('<li>'+result.meals[0].strMeasure8+'</li>');
	$('#me').append('<li>'+result.meals[0].strMeasure9+'</li>');
	$('#me').append('<li>'+result.meals[0].strMeasure10+'</li>');
	$('#me').append('<li>'+result.meals[0].strMeasure11+'</li>');
	$('#me').append('<li>'+result.meals[0].strMeasure12+'</li>');
	$('#me').append('<li>'+result.meals[0].strMeasure13+'</li>');
	$('#me').append('<li>'+result.meals[0].strMeasure14+'</li>');
	$('#me').append('<li>'+result.meals[0].strMeasure15+'</li>');
	$('#me').append('<li>'+result.meals[0].strMeasure16+'</li>');
	$('#me').append('<li>'+result.meals[0].strMeasure17+'</li>');
	$('#me').append('<li>'+result.meals[0].strMeasure18+'</li>');
	$('#me').append('<li>'+result.meals[0].strMeasure19+'</li>');
	$('#me').append('<li>'+result.meals[0].strMeasure20+'</li>');
	
	
	
	// Measure to string
	var meas = $("#me li").map(function() {
		return this.textContent.trim();
	  }).get();
	  var meas1=(JSON.stringify(meas, 0, 3))
	  console.log(meas1);
	  var Measure=JSON.parse(meas1);
	  var strMeasure =Measure.filter(n => n)
	  strMeasure=strMeasure.join(", ")
	  console.log(strMeasure);


				

	//youtube 
	

	var videoid = result.meals[0].strYoutube;
	$("#h3").empty();
	$('<h3>You can watch it on youtube</h3>').appendTo('#h3');
	$("#ytube").empty();

	$('<a type="button" href target="_blanck" class="btn btn-danger btn-lg" data-mdb-ripple-color="#be8989" id="youtubeButton"> Youtube </a>')
	.attr("href", videoid)
	.appendTo("#ytube");
	

		//email

		$("#h").empty();
		$('<h3>Email it</h3>').appendTo('#h');
		$("#email1").empty();
		$('<input type="email" id="typeEmail" class="form-control" /><label class="form-label" for="typeEmail"></label>').appendTo("#email1");
		$('<button type="button" class="btn btn-info">send</button>').appendTo("#email1");



				// image
	$("#image1").empty();
	const foodImage = result.meals[0].strMealThumb;
	$('<img id="image" src="" alt="food">').appendTo("#image1");
	$('#image').attr('src', foodImage);



	// send email


	var message={
		Instructions:ins,
		Ingredient:ingredIent,
		Measure:strMeasure
	}
		$('#send').on('click', function () {
			$('input[type="email"]').each(function () {
			var value1 = $(this).val();
			if (!value1) {
			///// modal
					// $('#model').modal().show();
				
			} else {	
				emailFun(value1,mealName,message);	
			}
		
			$('input[type="email"]').val('');
			});
		});

	

	}});
}

		// start function recipe
$("#btn").click(function(){

	recipeFun();

});

			// recipe function api
function recipeFun(){
	$.ajax({url: "https://www.themealdb.com/api/json/v1/1/random.php", 
			success: function(result){
		
		console.log(result);

				// meal name
				$("#meal").empty();
			$('#meal').append(result.meals[0].strMeal)
			mealName=result.meals[0].strMeal;
			//category
			$("#category").empty();
			$('#category').append(result.meals[0].strCategory)

			//area
			$("#area").empty();
			$('#area').append(result.meals[0].strArea)


							///// Ingredient
			$("#in").empty();
			$('#in').append('<li>  '+result.meals[0].strIngredient1+'</li>');
			$('#in').append('<li>  '+result.meals[0].strIngredient2+'</li>');
			$('#in').append('<li>  '+result.meals[0].strIngredient3+'</li>');
			$('#in').append('<li>  '+result.meals[0].strIngredient4+'</li>');
			$('#in').append('<li>  '+result.meals[0].strIngredient5+'</li>');
			$('#in').append('<li>  '+result.meals[0].strIngredient6+'</li>');
			$('#in').append('<li>  '+result.meals[0].strIngredient7+'</li>');
			$('#in').append('<li>  '+result.meals[0].strIngredient8+'</li>');
			$('#in').append('<li> '+result.meals[0].strIngredient9+'</li>');
			$('#in').append('<li>  '+result.meals[0].strIngredient10+'</li>');
			$('#in').append('<li>  '+result.meals[0].strIngredient11+'</li>');
			$('#in').append('<li>  '+result.meals[0].strIngredient12+'</li>');
			$('#in').append('<li>  '+result.meals[0].strIngredient13+'</li>');
			$('#in').append('<li>  '+result.meals[0].strIngredient14+'</li>');
			$('#in').append('<li>  '+result.meals[0].strIngredient15+'</li>');
			$('#in').append('<li>  '+result.meals[0].strIngredient16+'</li>');
			$('#in').append('<li>  '+result.meals[0].strIngredient17+'</li>');
			$('#in').append('<li>  '+result.meals[0].strIngredient18+'</li>');
			$('#in').append('<li>  '+result.meals[0].strIngredient19+'</li>');
			$('#in').append('<li>  '+result.meals[0].strIngredient20+'</li>');
			
			
					// Ingredient to string
			var ing = $("#in li").map(function() {
				return this.textContent.trim();
			  }).get();
			  var ingre=(JSON.stringify(ing, 0, 3))
			  console.log(ingre);
			  var ingredient=JSON.parse(ingre);
			  var ingredIent =ingredient.filter(n => n)
			  ingredIent=ingredIent.join(", ")
			  console.log(ingredIent);
			





									//Instructions
			$("p").empty();
			$('p').append(result.meals[0].strInstructions);
			var ins=result.meals[0].strInstructions
		

							//Measure
			$("#me").empty();
			$('#me').append('<li>'+result.meals[0].strMeasure1+'</li>');
			$('#me').append('<li>'+result.meals[0].strMeasure2+'</li>');
			$('#me').append('<li>'+result.meals[0].strMeasure3+'</li>');
			$('#me').append('<li>'+result.meals[0].strMeasure4+'</li>');
			$('#me').append('<li>'+result.meals[0].strMeasure5+'</li>');
			$('#me').append('<li>'+result.meals[0].strMeasure6+'</li>');
			$('#me').append('<li>'+result.meals[0].strMeasure7+'</li>');
			$('#me').append('<li>'+result.meals[0].strMeasure8+'</li>');
			$('#me').append('<li>'+result.meals[0].strMeasure9+'</li>');
			$('#me').append('<li>'+result.meals[0].strMeasure10+'</li>');
			$('#me').append('<li>'+result.meals[0].strMeasure11+'</li>');
			$('#me').append('<li>'+result.meals[0].strMeasure12+'</li>');
			$('#me').append('<li>'+result.meals[0].strMeasure13+'</li>');
			$('#me').append('<li>'+result.meals[0].strMeasure14+'</li>');
			$('#me').append('<li>'+result.meals[0].strMeasure15+'</li>');
			$('#me').append('<li>'+result.meals[0].strMeasure16+'</li>');
			$('#me').append('<li>'+result.meals[0].strMeasure17+'</li>');
			$('#me').append('<li>'+result.meals[0].strMeasure18+'</li>');
			$('#me').append('<li>'+result.meals[0].strMeasure19+'</li>');
			$('#me').append('<li>'+result.meals[0].strMeasure20+'</li>');


					// Measure to string
			var meas = $("#me li").map(function() {
				return this.textContent.trim();
			  }).get();
			  var meas1=(JSON.stringify(meas, 0, 3))
			  console.log(meas1);
			  var Measure=JSON.parse(meas1);
			  var strMeasure =Measure.filter(n => n)
			  strMeasure=strMeasure.join(", ")
			  console.log(strMeasure);







			
			//youtube 
		
			var videoid = result.meals[0].strYoutube;
			$("#h3").empty();
			$('<h3>You can watch it on youtube</h3>').appendTo('#h3');
			$("#ytube").empty();
			$('<a type="button" href target="_blanck" class="btn btn-danger btn-lg" data-mdb-ripple-color="#be8989" id="youtubeButton"> Youtube </a>')
			.attr("href", videoid)
			.appendTo("#ytube");
			
						//email
			$("#h").empty();
			$('<h3>Email it</h3>').appendTo('#h');
			$("#email1").empty();
			$('<input type="email" id="typeEmail" class="form-control" /><label class="form-label" for="typeEmail"></label>').appendTo("#email1");
			$('<button type="button" class="btn btn-info" id="send">send</button>').appendTo("#email1");

						// image
			$("#image1").empty();
			const foodImage = result.meals[0].strMealThumb;
			$('<img id="image" src="" alt="food">').appendTo("#image1");
			$('#image').attr('src', foodImage);

			var idMeal= result.meals[0].idMeal;

			  		// calling localstorge
			localStorageFun(i,idMeal,mealName);

			  		// send email


					  var message={
						Instructions:ins,
						Ingredient:ingredIent,
						Measure:strMeasure
					}
			$('#send').on('click', function () {
				$('input[type="email"]').each(function () {
					var value1 = $(this).val();
					if (!value1) {
					   ///// modal
							// $('#model').modal().show();
					     
					} else {	
						emailFun(value1,mealName,message);	
					}
				   
					$('input[type="email"]').val('');
				});
			});
	}});
	
}


			// targting enter key
$('input').keyup(function(e){
    var code = e.which;
    if(code == 13){                                      
        e.preventDefault();
        $('#send').trigger('click');
    }
});


			//local storge function
function localStorageFun(x,val,meal){
	var mea={
		mealname:meal,
		mealnumber:val
	}
	localStorage.setItem(x,JSON.stringify(mea));
	$('#oildrecipe').append('<li><a type="button" href target="_blanck" class="btn btn-danger btn-lg" data-mdb-ripple-color="#be8989" id="oldRecipeMeal">'+ mealName +'</a></li>')
	i++;
}
		// email function
		$(document).ready(function($) {
			
			 
			 
			$('#modal1').modal();
		  
			
		  });
		//   $('#Modal1').modal('open');