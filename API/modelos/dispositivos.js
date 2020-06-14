const mongoose = require('mongoose')

var dispositivo = mongoose.Schema({
    nserie:String,
    marca:String,
    modelo:String,
    nombre:String,
    departamento:String,
    estadofuncional:String,
    fechadeadquisicion: String,
    garantia:String,
    mantenimientosrealizado:String
})

var Dispositivo = mongoose.model('dispositivos', dispositivo);

module.exports = {Dispositivo}
