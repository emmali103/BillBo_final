$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("JTGeqNTrE0BBOl4rLKJaPXdG9NRa19zF7acmjImF", "HHaeeUCUVtqVlc0WKMsdXwlV8ZFAvB7IyDhRMIAF");
	//Parse.initialize("ZTh4lArJFksTGuMLZ6sAaSyx1KOzCo3lL1QhwER7", "X2lqnhHPNKM5pkNKxZaWQlbZSMWItYxD7eT4Tleg");
	var TestObject = Parse.Object.extend("TestObject");
	var testObject = new TestObject();
	 /*testObject.save({foo: "bar2"}).then(function(object) {
	  alert("yay! it worked");
	}); */
	
	$('.form-signin').on('submit', function(e) {
 
	    // Prevent Default Submit Event
	    e.preventDefault();
 
	    // Get data from the form and put them into variables
	    var data = $(this).serializeArray(),
	        username = data[0].value,
	        password = data[1].value;
 
	    // Call Parse Login function with those variables
	    Parse.User.logIn(username, password, {
	        // If the username and password matches
	        success: function(user) {

	        	$('.container').css({'display':'none'});

	        	$('.form-logout').css({'display':'block'});
				
				var allQuery=new Parse.Query(Parse.Object.extend("mydata"));
 				allQuery.find({
		          success:function(results){
		            
					  for (var i = 0; i < results.length; i++) { 
					             var object = results[i];


				                (function($) {



				                     $('#showdetail').append(


				                     	

							                 "<div class='restaurantName'>Restaurant Name</div>",
	                		                 '<div class="restaurantName-content">' + object.get('restaurantName') + '</div>',

	                		                 "<div class='eatingTime'>Eating Time</div>",
	                		                 '<div class="eatingTime-content">' + object.get('eatingTime') + '</div>',


							                 "<div class='InstacheckItems'>Instacheck Items</div>",
							                 '<div class="InstacheckItems-content">' + object.get('instacheckItems') + '</div>',


							                 "<div class='UpdatedAt'>Updated Time</div>",
	                		                 '<div class="UpdatedAt-content">' + object.get('updatedAt') + '</div>',

	                		                 (object.get('instacheckImg'))?
							                 '<div class="Instacheckimage"><img class="img"src="' + object.get('instacheckImg')._url + '"></div>':
							                 ''

						





				                     	);
				                 })(jQuery);	
		 				         
					   } 
				},	   
				 
				  

				  error: function(object, error) {
				     console.log(error);
				  }
				}); 
				
				 
				
				 
	           /* alert('Welcome!');*/
	        },
	        // If there is an error
	        error: function(user, error) {
	            console.log("The user is not found in the Cloud DB");
	        }
	    });
		
		
		 
	});


$('.form-logout').on('submit', function (e) {
        // Prevent Default Submit Event
        e.preventDefault();

        console.log("Performing submit");

        //logout current user
        if ( Parse.User.current() ) {
            Parse.User.logOut();
         
            

            // check if really logged out
            if (Parse.User.current())
                console.log("Failed to log out!");
            
        }

        window.location.href = "index.html";
       
    });
	
 
});



$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});





