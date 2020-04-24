const mongoose = require('mongoose')

var reporte = mongoose.Schema({
    ReportadoPor: String,
    info: String,
    estado: String,
})

var Reportes = mongoose.model('reportes', reporte);

module.exports = {Reportes}