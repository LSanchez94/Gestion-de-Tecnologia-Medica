const mongoose = require('mongoose')

var inventario = mongoose.Schema({
    serie: String,
    estado: String,
    adquisicion: Date,
    marca: String,
    garantia: String,
    Departamento: String,
    modelo: String,
    mantenimientos: Number,

})

var Inventario = mongoose.model('inventario', inventario);

module.exports = {Inventario}
