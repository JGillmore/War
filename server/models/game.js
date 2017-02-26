var mongoose = require('mongoose');

var GameSchema = mongoose.Schema({
  players: Array,
  cardsInPlayerHand: Number,
  name: String,
});

mongoose.model("Game", GameSchema);
