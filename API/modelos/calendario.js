const mongoose = require('mongoose')


/*
El tipo es para ver de que departamento es la anotación:
    1: Capacitación
    2: Mantenimiento
    3: Tareas
*/
var calendario = mongoose.Schema({  
    dia : Number,
    mes: Number,
    anio: Number,
    tipo: Number,
})

var Calendario = mongoose.model('Calendario', calendario);

module.exports = {Calendario}