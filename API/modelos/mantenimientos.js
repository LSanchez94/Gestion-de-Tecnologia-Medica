const mongoose = require('mongoose')

var mantenimiento = mongoose.Schema({
    Departamento: String,
    NumSerie: String,
    info: String,
    estado: String,
})

var Mantenimiento = mongoose.model('mantenimientos', mantenimiento);

module.exports = {Mantenimiento}