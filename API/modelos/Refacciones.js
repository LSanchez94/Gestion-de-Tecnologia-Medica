const mongoose = require('mongoose')

var datosR = mongoose.Schema({
    nombre:String,
    marca:String,
    modelo:String,
    equipo:String,
    cantidad:String,
    proveedor:String 
   
})

var AddRefacciones = mongoose.model('Refacciones', datosR);

module.exports = {AddRefacciones}
