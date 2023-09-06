const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  // Other movie fields
});

module.exports = mongoose.model('Movie', movieSchema);
