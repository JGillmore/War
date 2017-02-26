app.factory("GameFactory", function ($http) {

   var game = {};
   var factory = {};

   factory.newGame = function(name, cardsInHand, numOfPlayers, callback){
     $http.post('/newGame', {name:name, cardsInHand:cardsInHand, numOfPlayers:numOfPlayers}).then(function(json){
       game = json.data;
       callback(game);
      })
   }
   factory.getGame = function(callback){
     callback(game);
   }

   return factory;
});
