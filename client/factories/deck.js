app.factory("DeckFactory", function ($http, $location) {

   var deck = {};
   var factory = {};

   factory.newDeck = function(acesHigh, callback){
     $http.post('/newDeck', {acesHigh:acesHigh}).then(function(json){
       deck = json.data;
       callback(deck);
      })
   }
   factory.getDeck = function(callback){
     callback(deck);
   }
   factory.setDeck = function(controllerDeck){
     deck = controllerDeck;
   }
   factory.playGame = function(game){
     $location.path("/"+game)
   }
   factory.dealACard = function(){
     
   }

   return factory;

});
