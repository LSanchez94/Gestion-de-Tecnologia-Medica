const mongoose = require('mongoose')

var dispositivo = mongoose.Schema({
    nserie:String,
    marca:String,
    modelo:String,
    alias:String,
    departamento:String,
    estadofuncional:String,
    fechadeadquisición:String,
    garantia:String,
    mantenimientosrealizado:String,
})

var Dispositivo = mongoose.model('dispositivos', dispositivo);

module.exports = {Dispositivo}
