var mongoose = require('mongoose');

var DeckSchema = mongoose.Schema({
  cards: Array,
  discardPile: Array
});

mongoose.model("Deck", DeckSchema);
