const mongoose = require('mongoose');
const config = require('../config');

const DB_URL = config.dev.env.DB_URL;

const Result = require('./ResultModel');

class DBService {
  async init() {
    try {
      await mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
      });

      mongoose.set('autoIndex', true);

      Result.init();
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  }
}

module.exports = new DBService();
