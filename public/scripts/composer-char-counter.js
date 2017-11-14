$( document ).ready(function() {
    $("textarea").on("keydown", function(event) {
      var a = $('textarea').val().length;
      var maxLimit = 140;
      var charRemaining = maxLimit - a ;
      if(charRemaining < 0){
        $(this).siblings('.counter').text(charRemaining).css("color","red");
      } else {
        $(this).siblings('.counter').text(charRemaining).css("color", "black");
      }
    });
});

// $ (document).addEventListener("keypress", function(event) {
//   console.log(event);
// });




