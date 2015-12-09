$(document).ready(function(){

$('.form-signin').on('submit', function(e) {
 
	    // Prevent Default Submit Event
	    e.preventDefault();
		Parse.$ = jQuery;
		Parse.initialize("JTGeqNTrE0BBOl4rLKJaPXdG9NRa19zF7acmjImF", "HHaeeUCUVtqVlc0WKMsdXwlV8ZFAvB7IyDhRMIAF");

		var user = new Parse.User();
		//var form = document.getElementById("signup-form");

	    var data = $(this).serializeArray(),
	        username = data[0].value,
	        password = data[1].value;
			
		user.set("username",username);
		user.set("password",password);
	

		user.signUp(null, {
			success: function(user) {
			alert('signup success!');
			
			window.location.href = 'index.html';
			},
			error: function(user,error){
			alert('signup doesnt work');
			}
			
			});
		
		
		 
	});












 });



