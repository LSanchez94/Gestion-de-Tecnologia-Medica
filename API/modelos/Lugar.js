const mongoose = require('mongoose')

var lugar = mongoose.Schema({
    posicion:Number,
})

var Lugar = mongoose.model('lugar', lugar);

module.exports = {Lugar}