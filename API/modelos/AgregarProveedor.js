const mongoose = require('mongoose')

var datos= mongoose.Schema({
    
        nameE: String,
        nameC: String,
        email: String,
        dir: String,
        tel: String
})

var AddProveedor= mongoose.model('AgregarProveedor', datos);

module.exports = {AddProveedor}