var mongoose = require('mongoose');
var Card = mongoose.model('Card')
var Deck = mongoose.model('Deck')

module.exports = {
    newDeck: function (request, response) {
      var suits = ['heart', 'spade', 'diamond', 'club'];
      var values = [1,2,3,4,5,6,7,8,9,10,11,12,13];
      var deck = new Deck();
      for (i in suits){
        for (j in values){
          var card = new Card();
          card.suit = suits[i];
          if (request.body.acesHigh && values[j] == 1){
            card.value = 14;
          }else{
            card.value = values[j];
          }
          if (suits[i] == 'heart' || suits[i] == 'diamond'){
            card.color = 'red';
          }else{
            card.color = 'black';
          }
          card.image = "images/"+suits[i][0]+values[j]+".png";
          deck.cards.push(card);
        }
      }
      response.json(deck);
    },
};
