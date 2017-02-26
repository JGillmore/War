var DeckController = require('../controllers/deckController');
var GameController = require('../controllers/gameController');
module.exports = function(app){
  app.post('/newDeck', function(req,res){
    DeckController.newDeck(req,res);
  });
  app.post('/newGame', function(req,res){
    GameController.newGame(req,res);
  })
}
