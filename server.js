const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./models');
const PORT = process.env.PORT || 3000;

// Configure CORS
app.use(cors());
app.use(express.json());

// Define default route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Movie Booking Application!' });
});

// Connect to the MongoDB database
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to the database!');
    startServer();
  })
  .catch((err) => {
    console.error('Cannot connect to the database!', err);
    process.exit(1);
  });

// Start the Express server
function startServer() {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
