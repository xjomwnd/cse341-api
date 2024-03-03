const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://cse341-api:7Mwathani77@cluster0.u9kddnv.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
