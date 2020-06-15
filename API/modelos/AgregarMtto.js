const mongoose = require('mongoose')

var inventario = mongoose.Schema({
    nserie: String,
    departamento: String,
    tipomantenimientos: String,
    fechamantenimientos: Date,
    encargado: String,
    modelo: String,
    mantenimientos: Number
})

var AgregarMtto = mongoose.model('addMantenimiento', inventario);

module.exports = {AgregarMtto}