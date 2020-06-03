const mongoose = require('mongoose')

var datos = mongoose.Schema({
    nombre: String,
    contacto: String,
    email: String,
    tel: String,
    address: String
})

var AddProveedor = mongoose.model('AddProveedor',datos);

module.exports = {AddProveedor}