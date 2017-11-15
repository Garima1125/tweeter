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

    
    $("article").hover(function () {
        $(this).find(".heart-icon").show();
        $(this).find(".retweet-icon").show();
        $(this).find(".flag-icon").show();
        $(this).css("border-color", "black");
    },function () {
        $(this).find(".heart-icon").hide();
        $(this).find(".retweet-icon").hide();
        $(this).find(".flag-icon").hide();
        $(this).css("border-color", "lightgrey");
    });
});

// $ (document).addEventListener("keypress", function(event) {
//   console.log(event);
// });




