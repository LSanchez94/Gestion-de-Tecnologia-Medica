const mongoose = require('mongoose')

var tarea = mongoose.Schema({
    task: String,
    fechaTarea: String,
    descripcion: String
})

var Tareas = mongoose.model('tareas', tarea);

module.exports = {Tareas}