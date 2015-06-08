

$(document).ready(function() {

   $("body").keypress(function( event ) {
   if ( event.which == 38 ) {
      $("#arriba").css("background-color","green");
      alert("arriba");
   }
});
  
});