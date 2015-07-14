console.log("We're playing Peppa Pig Memory");

window.onload = function(){

  $(".card").on("click", function() {

    if ( $(event.target).hasClass("picture") ) {
      $(event.target).removeClass("picture");
    } else {
      $(event.target).addClass("picture");
    }

  });


    // $(event.target).css("background-color", "white");

// **** How to do function declration in the on click event???? *****


};

// if ( $(event.target).hasClass('done') ) {
//     $(event.target).removeClass('done');

//     // using underscore
//     _.each( $('#completed li'), function(element) {
//       console.log(element);
//       if (element.innerHTML === content) {
//         $(element).remove();
//       }
//     });

//   } else {
//     $(event.target).addClass('done');