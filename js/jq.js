$(document).ready(function() {
	$('._homelink').css("background-color", "red");
	  $(".link").click(function() {
       $(this).animate( { backgroundColor: 'red' }, 500);
       $(this).css("color", "white");

       	$('._homelink').css("background-color", "");
        	$('.link').not(this).each(function(){
        	$(this).css("background-color", "");
        });

   		});

	  $("._homelink").click(function(){
	  	 $(this).animate( { backgroundColor: 'red' }, 500);
	  	 $(this).css("color", "white");
	  	 $('.link').not(this).each(function(){
        	$(this).css("background-color", "");
        });
	  })

    $('.nav li a').on('click', function(){
      $('.collapse').collapse('hide'); 
});

});