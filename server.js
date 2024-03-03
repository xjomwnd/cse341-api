const express = require('express');
const connectDB = require('./connections');
const app = express();

connectDB();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
