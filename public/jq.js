$(document).ready(function() {
	$('._homelink').css("background-color", "red");
	  $(".link").click(function() {
       $(this).css("background-color", "red");
       $(this).css("color", "white");

       	$('._homelink').css("background-color", "");
        	$('.link').not(this).each(function(){
        	$(this).css("background-color", "");
        });

   		});

	  $("._homelink").click(function(){
	  	 $(this).css("background-color", "red");
	  	 $(this).css("color", "white");
	  	 $('.link').not(this).each(function(){
        	$(this).css("background-color", "");
        });
	  })


    $('.nav li a').on('click', function(){
    $('.btn-navbar').click(); //bootstrap 2.x
    $('.navbar-toggle').click() //bootstrap 3.x by Richard
});
});