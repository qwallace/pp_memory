console.log("We're playing Peppa Pig Memory");

window.onload = function(){

// pink, green, blue, yellow

  var cards = ["danny-dog", "danny-dog", "zoe-zebra", "zoe-zebra", "pedro-pony", "pedro-pony", "susie-sheep", "susie-sheep"];

  var delayMs = 1000;

  var setGame = function() {

    console.log("This is the setGame function");

    if ($('#game div').length > 0) {
      console.log("Game already set");
      return;
    } else {
      var shuffledCards = _.shuffle(cards);
      _.each(shuffledCards, function(element) {
        var newCard = '<div class=' + element + '></div>';
        $('#game').append(newCard);
      })
    }

  };

  // Flips cards back is not the same

  var flipCards = function() {

    console.log('It should be flipping cards...');


    $('.flipped').not('.pair').html('').removeClass('flipped');

    // $('.flipped').html('');

    // $('.flipped').removeClass('flipped');

    
  }

  // Calls setGame function when button clicked

  // $('#start-game').on('click', function(){
  //    console.log("We're starting!")
  //    setGame();
  // });

  setGame();

  // Main game functionality when div clicked

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

    } else if ( $('.flipped').not('.pair').length === 2 /* && $('.flipped').not('.pair')[0].innerHTML !== $('.flipped').not('.pair')[1].innerHTML */ ) {
      // debugger;
      console.log("It's NOT a pair");
      console.log('Timer starting');
      window.setTimeout(flipCards, delayMs);
      console.log('Timer finished');

    } else {
      
      console.log("Something else is happening");

    }

  });


};
