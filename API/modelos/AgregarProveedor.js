const mongoose = require('mongoose')

var datos = mongoose.Schema({
    nameC: String,
    correo: String,
    tel: String,
    dir: String
})

var AgregarProveedor = mongoose.model('AddProveedor',datos);

module.exports = {AgregarProveedor}