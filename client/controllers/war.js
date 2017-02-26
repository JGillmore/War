app.controller('WarController', function (DeckFactory, GameFactory, $scope, $timeout){
  var inPlay=false;
  var emptySlot = {image:"images/ec.png"};
  DeckFactory.getDeck(function(deck){
    $scope.deck = deck;
  });
  GameFactory.newGame("war", 100, 2, function(game){
    $scope.game = game;
    for(var i = 0; i < $scope.game.players.length; i++){
      $scope.game.players[i].playedCard ={};
      $scope.game.players[i].playedCard = emptySlot;
      $scope.game.players[i].wonPile = [];
      $scope.game.players[i].warPile = [];
    }
  });

  $scope.dealCards = function(pi){
    $scope.dealcardsclicked = true;
    if($scope.deck.cards.length > 0){
      var i = Math.floor(Math.random()*$scope.deck.cards.length);
      $scope.game.players[pi].hand.push($scope.deck.cards[i]);
      $scope.deck.cards.splice(i,1);
      if (pi){
        pi--;
      }else{
        pi++;
      }
      $timeout(function(){
        $scope.dealCards(pi);
      }, 100);
    }
  }

  $scope.playCard = function(){
    function grabWonPile(player){
      player.hand=player.wonPile
      player.wonPile=[];
    }

    var player1 = $scope.game.players[0]
    var player2 = $scope.game.players[1]
    if(player1.hand.length == 0){
      grabWonPile(player1);
      if(player1.hand.length == 0){
        $scope.gameOver = "LOSE";
        return;
      }
    }
    if(player2.hand.length == 0){
      grabWonPile(player2);
      if(player2.hand.length == 0){
        $scope.gameOver = "WIN";
        return;
      }
    }
    if(!inPlay){
      inPlay = true;
      player1.playedCard = player1.hand[player1.hand.length-1];
      player1.hand.pop();
      $timeout(function(){
        player2.playedCard = player2.hand[player2.hand.length-1];
        player2.hand.pop();
        $timeout(function(){
          if(player1.playedCard.value > player2.playedCard.value){
            player1.wonPile.push(player2.playedCard);
            player1.wonPile.push(player1.playedCard);
            player1.playedCard = emptySlot;
            player2.playedCard = emptySlot;
          }else if(player1.playedCard.value < player2.playedCard.value){
            player2.wonPile.push(player1.playedCard);
            player2.wonPile.push(player2.playedCard);
            player1.playedCard = emptySlot;
            player2.playedCard = emptySlot;
          }else{
            for(var i = 0; i < 3; i++){
              if(player1.hand.length == 0){
                grabWonPile(player1);
              }
              if(player2.hand.length == 0){
                grabWonPile(player2);
              }
              player1.warPile.push(player1.hand[player1.hand.length-1]);
              player2.warPile.push(player2.hand[player2.hand.length-1]);
              player1.hand.pop();
              player2.hand.pop();
            }
            $timeout(function(){
              if(player2.warPile[2].value > player1.warPile[2].value){
                player2.wonPile.push(player1.playedCard);
                player2.wonPile.push(player2.playedCard);
                player1.playedCard = emptySlot;
                player2.playedCard = emptySlot;
                for(var i = 0; i < 3; i++){
                  player2.wonPile.push(player1.warPile[i]);
                  player2.wonPile.push(player2.warPile[i]);
                }
                player2.warPile = [];
                player1.warPile = [];
              }else{
                player1.wonPile.push(player1.playedCard);
                player1.wonPile.push(player2.playedCard);
                player1.playedCard = emptySlot;
                player2.playedCard = emptySlot;
                for(var i = 0; i < 3; i++){
                  player1.wonPile.push(player1.warPile[i]);
                  player1.wonPile.push(player2.warPile[i]);
                }
                player2.warPile = [];
                player1.warPile = [];
              }
              inPlay = false;
            }, 1500);
          }
          if (player1.playedCard == emptySlot){
            inPlay = false;
          }
        }, 800);
      }, 400);
    }
  }
});
