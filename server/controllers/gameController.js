var mongoose = require('mongoose');
var Game = mongoose.model('Game')
var Player = mongoose.model('Player')

module.exports = {
    newGame: function (req, res) {
      var game = new Game({cardsInPlayerHand: req.body.cardsInHand, name: req.body.gameName})
      for(var i = 0; i < req.body.numOfPlayers; i++){
        var player = new Player({name:"Player"+(i+1)});
        game.players.push(player);
      }
      res.json(game);
    }
};
