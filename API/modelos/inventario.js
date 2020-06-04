const mongoose = require('mongoose')

var inventario = mongoose.Schema({
    serie: String,
    estado: String,
    adquisicion: String,
    marca: String,
    garantia: String,
    departamento: String,
    modelo: String,
    mantenimientos: Number,

})

var Inventario = mongoose.model('inventario', inventario);

module.exports = {Inventario}
