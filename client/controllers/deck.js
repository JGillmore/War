app.controller('DeckController', function (DeckFactory, GameFactory, $scope){
  DeckFactory.getDeck(function(deck){
    $scope.deck = deck;
  });

  $scope.newDeck = function(acesHigh = false){
    DeckFactory.newDeck(acesHigh, function(deck){
      deck.back = "images/ec.png"
      $scope.deck = deck;
    });
  }
  $scope.setBack = function(x){
    $scope.deck.back = "images/b"+x+"fv.png"
  }
  $scope.playGame = function(game){
    DeckFactory.setDeck($scope.deck);
    DeckFactory.playGame(game);
  }
});
