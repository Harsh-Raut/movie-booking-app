const mongoose = require('mongoose');
const Movie = require('./movie.model');
const User = require('./user.model');
const Artist = require('./artist.model');
const Genre = require('./genre.model');

const db = {};
db.mongoose = mongoose;
db.movie = Movie;
db.user = User;
db.artist = Artist;
db.genre = Genre;

module.exports = db;
