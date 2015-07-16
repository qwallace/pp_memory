
window.onload = function() {

  console.log("We're testing...");


  var cards = ["danny-dog", "danny-dog", "zoe-zebra", "zoe-zebra", "pedro-pony", "pedro-pony", "susie-sheep", "susie-sheep"];

  var players = [ {name: "Player 1", score: 0}, {name: "Player 2", score: 0} ];

  var setGame = function() {
    console.log("This is the setGame function");

    // var shuffledCards = _.shuffle(cards);

    // console.log(shuffledCards);

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

  // To start game using button
      
  $('#reset').on('click', function(){
    console.log("We're resetting!")
    $('#game').empty();
    debugger;
    setGame();
  });

  setGame();


  console.log(players[0].score);

};

