const db = require('../models');

const Movie = db.movie;

exports.findAllMovies = (req, res) => {
  Movie.find()
    .then((movies) => {
      res.json(movies);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    });
};

exports.findOne = (req, res) => {
  const { movieId } = req.params;
  Movie.findById(movieId)
    .then((movie) => {
      if (!movie) {
        return res.status(404).json({ message: 'Movie not found' });
      }
      res.json(movie);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    });
};

exports.findShows = (req, res) => {
  const { movieId } = req.params;
  // Implement logic to find shows for a specific movie
  // Example: Movie.findById(movieId).populate('shows').exec(...)
};

// Add more controller functions as needed

// For example:
// exports.create = (req, res) => { ... };
// exports.update = (req, res) => { ... };
// exports.delete = (req, res) => { ... };
