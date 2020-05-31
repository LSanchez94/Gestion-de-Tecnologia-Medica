const mongoose = require('mongoose');

mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost:27017/GDT', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
mongoose.set('useCreateIndex', true);

module.exports = {mongoose}