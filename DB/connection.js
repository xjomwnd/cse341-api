const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/mongodb+srv://cse341-api:7Mwathani77@cluster0.u9kddnv.mongodb.net/';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
