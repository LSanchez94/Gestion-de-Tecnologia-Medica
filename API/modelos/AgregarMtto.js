const mongoose = require('mongoose')

var inventario = mongoose.Schema({
    serie: String,
    departamento: String,
    tipomantenimientos: String,
    fechamantenimientos: Date,
    encargado: String,
    Departamento: String,
    modelo: String,
    mantenimientos: Number,
})

var AgregarMtto = mongoose.model('AddMantenimiento', AgregarMtto);

module.exports = {AgregarMtto}