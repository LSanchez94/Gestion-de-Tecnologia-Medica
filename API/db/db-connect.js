const mongoose = require('mongoose');

mongoose.connect( 'mongodb://localhost:27017/GDT', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
mongoose.set('useCreateIndex', true);

module.exports = {mongoose}