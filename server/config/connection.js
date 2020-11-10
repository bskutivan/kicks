const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI || 'mongodb://localhost/kicks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;
