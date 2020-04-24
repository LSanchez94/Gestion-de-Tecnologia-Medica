const mongoose = require('mongoose')

var usuario = mongoose.Schema({
    name: String,
    correo: String,
    password: String,
    perfil: String
})

var Usuarios = mongoose.model('usuarios', usuario);

module.exports = {Usuarios}
