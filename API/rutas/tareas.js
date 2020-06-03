const express = require('express');
const router = express.Router();
const {Tareas} = require('../modelos/tareas');


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
    console.log(req.body.name)
    Tareas.create({
        task: req.body.task,
        fechaTarea: req.body.fechaTarea,
        descripcion: req.body.descripcion,
    }, err => {
        console.log(err)
        if(!err){
            res.send("Tarea Agregada")
        }else{
            res.send("Hubo un problema agregando la tarea")
        }
    })
});

module.exports = router;