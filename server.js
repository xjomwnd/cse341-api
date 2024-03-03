const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mongodb+srv://cse341-api:7Mwathani77@cluster0.u9kddnv.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

// Define a schema for your documents
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String
});

// Create a model from the schema
const User = mongoose.model('User', userSchema);

// Define routes
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
