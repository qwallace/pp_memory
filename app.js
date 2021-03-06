console.log("We're playing Peppa Pig Memory");

window.onload = function(){
  

  var cards = ["danny-dog", "danny-dog", "zoe-zebra", "zoe-zebra", "susie-sheep", "susie-sheep", "emily-elephant", "emily-elephant", "peppa-pig", "peppa-pig", "richard-rabbit", "richard-rabbit", "candy-cat", "candy-cat", "ducky", "ducky" ];

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
        var newCard = '<div class="' + element + '"></div>';
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
      $('#player-one-div').removeClass('active');
      $('#player-two-div').addClass('active');
    } else {
      turn = players[0];
      $('#player-two-div').removeClass('active');
      $('#player-one-div').addClass('active');
    }

    console.log("It's " + turn.name + "'s turn.");

  }

  var updateScore = function() {
    console.log("Updating score now");
    $('#player-one-score').html(players[0].score);
    $('#player-two-score').html(players[1].score);
  }

  var whoWins = function() {
    if ($('.pair').length === cards.length) {
      if (players[0].score > players[1].score) {
        $('#winner-text').html(players[0].name + " wins!");
      } else if (players[0].score < players[1].score) {
        $('#winner-text').html(players[1].name + " wins!");
      } else {
        $('#winner-text').html("It's a draw! Hit reset to play again.");
      }
    }

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
      // ******** Messed with it here **********
      var content = $(event.target).attr('class')
      var image = '<img src="images/' + content + '.png">';
      $(event.target).html(image);
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

    }

    whoWins();

  });

  // Resets the game

  $('#reset-button').on('click', function() {
    console.log("We're resetting!");
    $('#game').empty();
    // debugger;
    turn = players[0];
    $('#player-two-div').removeClass('active');
    $('#player-one-div').addClass('active');
    players[0].score = 0;
    players[1].score = 0;
    $('#winner-text').html("Let's play!");
    updateScore();
    setGame();
  });


};
