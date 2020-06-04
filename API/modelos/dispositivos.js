const mongoose = require('mongoose')

var dispositivo = mongoose.Schema({
    nserie:String,
    marca:String,
    modelo:String,
    departamento:String,
    estadofuncional:String,
    fechadeadquisicion: Date,
    garantia:String,
    mantenimientosrealizado:String
})

var Dispositivo = mongoose.model('dispositivos', dispositivo);

module.exports = {Dispositivo}
