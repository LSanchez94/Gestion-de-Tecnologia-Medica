const mongoose = require('mongoose')

var reporte = mongoose.Schema({
    Departamento: String,
    NumSerie: String,
    info: String,
    estado: String,
})

var Reportes = mongoose.model('reportes', reporte);

module.exports = {Reportes}