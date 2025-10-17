const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: { type: number, required: true },
  genre: { type: String, required: true },
  watched: { type: boolean, required: false },
  rating: { type: number, required: true, min: 1, max: 10 },
  createdAt: { type: Date, default: Date.now },
}, {
  versionKey: false
});

module.exports = mongoose.models.Movie || mongoose.model('Movie', movieSchema);