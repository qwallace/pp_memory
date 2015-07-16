console.log("We're playing Peppa Pig Memory");

window.onload = function(){

// pink, green, blue, yellow

  var cards = ["danny-dog", "danny-dog", "zoe-zebra", "zoe-zebra"];

  var pair = [];

  var delayMs = 1000;

  var chances = 2;

  //_.each(cards, function(element, index) {
    // var newCard = $("div").addClass(card);
    // $('#game').append(newCard);
  // });

  var flipCards = function() {

    console.log('It should be flipping cards...');


    $('.flipped').not('.pair').html('').removeClass('flipped');

    // $('.flipped').html('');

    // $('.flipped').removeClass('flipped');

    
  }

  $('#game div').on("click", function() {

    console.log("It's clicking")


   // if ($('.flipped').length === 2) {
   //  return;
   // }

    if ($(event.target).hasClass("pair")) {
      return;
    }

    if ( $(event.target).hasClass("flipped") ) {
      $(event.target).removeClass("flipped");
      $(event.target).html('');
    } else {
      var content = $(event.target).attr('class');
      $(event.target).html(content);
      $(event.target).addClass('flipped');
    }

    // debugger;
    
    if ( $('.flipped').not('.pair').length === 2 && $('.flipped').not('.pair')[0].innerHTML === $('.flipped').not('.pair')[1].innerHTML ) {

      console.log("It's a pair");
      $('.flipped').addClass('pair');

    } else if ( $('.flipped').not('.pair').length === 2 && $('.flipped').not('.pair')[0].innerHTML !== $('.flipped').not('.pair')[1].innerHTML ) {
      // debugger;
      console.log("It's NOT a pair");
      console.log('Timer starting');
      window.setTimeout(flipCards, delayMs);
      console.log('Timer finished');

    } else {
      
      console.log("Something else is happening");

    }


    // if ( $('.flipped').length === 2 && $('.flipped')[0] !== $('.flipped')[1] ) { // this is where it's breaking down
    // } else if ( $('.flipped').length === 2 && $('.flipped')[0].html() === $('.flipped')[1].html() ) {
    // }

  });


};
