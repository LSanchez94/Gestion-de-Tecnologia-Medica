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
    mttoprev:String,
    cantidad:String,
    mttocorr:String,
    propiedad:String,
    aptodonacion:String,
    capacitacion:String,
    proveedor:String,
    refacciones:String,
})

var Dispositivo = mongoose.model('dispositivos', dispositivo);

module.exports = {Dispositivo}
