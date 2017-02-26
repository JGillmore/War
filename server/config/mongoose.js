var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cards');

require('../models/card');
require('../models/deck');
require('../models/game');
require('../models/player');
