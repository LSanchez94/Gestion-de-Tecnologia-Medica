const express = require('express');
const router = express.Router();
const {Tareas} = require('../modelos/tareas');
const {Calendario} = require('../modelos/calendario');

//TRAE TODAS LAS TAREAS
router.get('/getTareas', (req,res) => {
    Tareas.find().then(response => {
        res.send(response)
    }).catch(err => {
        res.send(err)
    }) 
})

//INSERTA TAREA
router.post('/addTarea', (req,res) => {
    console.log("Tar");
    console.log(req.body.fechaTarea)
    var fechas = req.body.fechaTarea.split('-');
    var mes = fechas[1]-1;
    Tareas.create({
        task: req.body.task,
        fechaTarea: req.body.fechaTarea,
        descripcion: req.body.descripcion,
    },err => {
         if(!err){
             Calendario.create({
               anio : fechas[0],
               mes: fechas[1],
               dia: fechas[2]+''+mes+''+fechas[0],
                tipo: 3
             })
             res.send("Tarea Agregada!")
         }else{
             res.send("Hubo un problema agregando tarea")
         }
     })
});

module.exports = router;