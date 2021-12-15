
 
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
		   //console.log(value);
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

	//youtube / modal
	

	var videoid = result.meals[0].strYoutube;
	$("#h3").empty();
	$('<h3>You can watch it on youtube</h3>').appendTo('#h3');
	$("#ytube").empty();
		// youtube button
	$('<a type="button" href target="_blank" class="btn btn-danger btn-lg" data-mdb-ripple-color="#be8989" id="youtubeButton"> Youtube </a>')
	.attr("href", videoid)
	.appendTo("#ytube");
	// modal button
	$("#email-me").empty();
	$('<a type="button" href class="waves-effect waves-light btn modal-trigger" data-mdb-ripple-color="#be8989" id="email-me">Email Me!</a>')
	.attr("href", "#modal1")
	.appendTo("#email-me");
	

				// image
	$("#image1").empty();
	const foodImage = result.meals[0].strMealThumb;
	$('<img id="image" src="" alt="food">').appendTo("#image1");
	$('#image').attr('src', foodImage);

	

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

			//youtube 
			

			var videoid = result.meals[0].strYoutube;
			$("#h3").empty();
			$('<h3>You can watch it on youtube</h3>').appendTo('#h3');
			$("#ytube").empty();

			// youtube button
			$('<a type="button" href target="_blanck" class="btn btn-danger btn-lg" data-mdb-ripple-color="#be8989" id="youtubeButton"> Youtube </a>')
			.attr("href", videoid)
			.appendTo("#ytube");

			// modal button
			$("#email-me").empty();
			$('<a type="button" href class="waves-effect waves-light btn modal-trigger" data-mdb-ripple-color="#be8989" id="email-me">Email Me!</a>')
			.attr("href", "#modal1")
			.appendTo("#email-me");
	

						// image
			$("#image1").empty();
			const foodImage = result.meals[0].strMealThumb;
			$('<img id="image" src="" alt="food">').appendTo("#image1");
			$('#image').attr('src', foodImage);

			var idMeal= result.meals[0].idMeal;
			localStorageFun(i,idMeal,mealName);

	


	}});
	
}

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

