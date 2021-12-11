
 
	
	$("#btn").click(function(){
		$.ajax({url: "https://www.themealdb.com/api/json/v1/1/random.php", 
				success: function(result){
		  $("#div1").html(result);
		  console.log(result);

		$('#meal').append(result.meals[0].strMeal)
		$('#category').append(result.meals[0].strCategory)
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
								$("#ytube").empty();
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
	
		$('<a type="button" href target="_blanck" class="btn btn-danger btn-lg" data-mdb-ripple-color="#be8989" id="youtubeButton"> Youtube </a>')
    	.attr("href", videoid)
    	.appendTo("#ytube");
		// $(document).on('click','#youtubeButton', function () {     
			
		// });
		

		}});
	  });