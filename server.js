const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/myDatabase';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
