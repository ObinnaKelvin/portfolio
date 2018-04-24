//Scroll Effect
$(window).scroll(function(){
  if($(document).scrollTop() > 50){
    $('nav').addClass('shrink');
  }
  else{
    $('nav').removeClass('shrink');
  }
});


//Modal Script
$(window).load(function(){
   $('#myModal').modal('show');
    }); 
