const mongoose = require('mongoose')

var dispositivo = mongoose.Schema({
    nombre:String,
    marca:String,
    modelo:String,
    departamento:String,
    nserie:String,
    adq:String,
    garantia: String,
    edofuncional:String,
    mttoprev:String
})

var Dispositivo = mongoose.model('dispositivos', dispositivo);

module.exports = {Dispositivo}
