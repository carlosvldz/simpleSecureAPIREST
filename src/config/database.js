const mongoose = require('mongoose');

// Config DB Connection
const mongoDB = 'mongodb://localhost/secureAPI';

mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});
mongoose.Promise = global.Promise;

module.exports = mongoose;