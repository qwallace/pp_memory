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

    $('.flipped').html('');

    $('.flipped').removeClass('flipped');

    
  }

  $('#game div').on("click", function() {

    console.log("It's clicking")


    if ($('.flipped').length === 2) {
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
      
    if ( $('.flipped').length === 2 && $('.flipped')[0] !== $('.flipped')[1] ) {
      console.log('Timer starting');
      window.setTimeout(flipCards, delayMs);
      console.log('Timer finished');
    } else if ( $('.flipped').length === 2 && $('.flipped')[0] === $('.flipped')[1] ) {
      console.log("It's a pair");
      $('.flipped').addClass('pair');
    }

  });


};
