const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/node-jwt-mongo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(db => console.log("Database is connected"))
