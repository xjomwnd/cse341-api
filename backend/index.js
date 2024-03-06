// Require the necessary modules
const express = require('express');
const mongoose = require('mongoose');

// Create an instance of Express
const app = express();

// Set up a basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// Start the Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
