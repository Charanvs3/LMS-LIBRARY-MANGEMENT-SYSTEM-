const mongoose = require('mongoose');

module.exports = function () {
  mongoose
    .connect(
      'mongodb+srv://admin1:admin@charan.egbepzd.mongodb.net/?retryWrites=true&w=majority&appName=charan',
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log(' Connected to Db '))
    .catch((err) => console.log('not connected to Db', err));
};
