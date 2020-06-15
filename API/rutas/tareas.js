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
    var fec = req.body.fechaTarea.split('-');
    var mes = fec[1]-1;
    Tareas.create({
        task: req.body.task,
        fechaTarea: req.body.fechaTarea,
        descripcion: req.body.descripcion,
    },err => {
         if(!err){
             Calendario.create({
               anio : fec[0],
               mes: fec[1],
               dia: fec[2]+''+mes+''+fec[0],
                tipo: 3
             })
             res.send("Tarea Agregada!")
         }else{
             res.send("Hubo un problema agregando tarea")
         }
     })
});

module.exports = router;