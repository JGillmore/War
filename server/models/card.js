var mongoose = require('mongoose');

var CardSchema = mongoose.Schema({
  suit: String,
  value: Number,
  color: String,
  image: String
});

mongoose.model("Card", CardSchema);
