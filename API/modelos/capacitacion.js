const mongoose = require('mongoose')

var capacitacion = mongoose.Schema({
    tema: String,
    departamento: String,
    descripcion: String,
    fecha: String,
    persona: String,
})

var Capacitacion = mongoose.model('capacitacion', capacitacion);

module.exports = {Capacitacion}