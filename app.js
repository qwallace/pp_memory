console.log("We're playing Peppa Pig Memory");

window.onload = function(){
  

  var cards = ["danny-dog", "danny-dog", "zoe-zebra", "zoe-zebra", "pedro-pony", "pedro-pony", "susie-sheep", "susie-sheep"];

  var delayMs = 1000;

  var players = [ {name: "Player 1", score: 0}, {name: "Player 2", score: 0} ];

  var turn = players[0];

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

  // Chages the each player's turn and sets the active class for player name and score

  var changeTurn = function() {

    if (turn === players[0]) {
      turn = players[1];
      $('#player-one').removeClass('active');
      $('#player-two').addClass('active');
      $('#player-one-score').removeClass('active');
      $('#player-two-score').addClass('active');
    } else {
      turn = players[0];
      $('#player-two').removeClass('active');
      $('#player-one').addClass('active');
      $('#player-two-score').removeClass('active');
      $('#player-one-score').addClass('active');
    }

    console.log("It's " + turn.name + "'s turn.");

  }

  var updateScore = function() {
    console.log("Updating score now");
    $('#player-one-score').html(players[0].score);
    $('#player-two-score').html(players[1].score);
  }

  // Calls setGame function when button clicked

  $('#start-button').on('click', function(){
     console.log("We're starting!")
     setGame();
  });


  // Main game functionality when div clicked

  $('#game').on("click", 'div', function() {

    console.log("It's clicking")


    //if ($('.flipped').not('.pair').length === 2) {
     //return;
    //}

    if ($('.flipped').not('.pair').length === 2 || $(event.target).hasClass("pair")) {
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
      turn.score++;
      updateScore();
      changeTurn();

    } else if ( $('.flipped').not('.pair').length === 2 /* && $('.flipped').not('.pair')[0].innerHTML !== $('.flipped').not('.pair')[1].innerHTML */ ) {
      // debugger;
      console.log("It's NOT a pair");
      console.log('Timer starting');
      window.setTimeout(flipCards, delayMs);
      console.log('Timer finished');
      changeTurn();

    } else {
      
      console.log("Something else is happening");
      // Who wins function?

    }

  });

  // Resets the game

  $('#reset-button').on('click', function() {
    console.log("We're resetting!");
    $('#game').empty();
    // debugger;
    turn = players[0];
    $('#player-two').removeClass('active');
    $('#player-two-score').removeClass('active');
    $('#player-one').addClass('active');
    $('#player-one-score').addClass('active');
    players[0].score = 0;
    players[1].score = 0;
    updateScore();
    setGame();
  });


};
