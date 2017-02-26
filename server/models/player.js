var mongoose = require('mongoose');

var PlayerSchema = mongoose.Schema({
  hand: Array,
  name: String,
});

mongoose.model("Player", PlayerSchema);
