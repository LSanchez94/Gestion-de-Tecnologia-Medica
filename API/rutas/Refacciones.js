const express = require('express');
const router = express.Router();
const {AddRefacciones} = require('../modelos/Refacciones');


//TRAE TODOS LOS USUARIOS
router.get('/getDatosR', (req,res) => {
    AddRefacciones.find().then(response => {
        res.send(response)
    }).catch(err => {
        res.send(err)
    })
})

//Datos de Refacciones
router.post('/addDatosR', (req,res) => {
    console.log(req.body.nombre)
    AddRefacciones.create({
        nombre: req.body.nombre,
        marca: req.body.marca,
        modelo: req.body.modelo,
        equipo: req.body.equipo,
        cantidad: req.body.cantidad,
        proveedor: req.body.proveedor,
    }, 
    err => {
        console.log(err)
        if(!err){
            res.send("Refacción Agregada!")
        }else{
            res.send("Hubo un problema, agregando la refacción")
        }
    })
});

//DELETE

router.post('/deleteRef', (req,res) => {
    console.log("test de llegada")
    console.log(req.body.modelo)
    AddRefacciones.findOneAndDelete({modelo: req.body.modelo}, err => {
        if(!err){
            res.send("Refacción Eliminado!")
        }else{
            res.send("Hubo un problema eliminando la refacción")
        }
    })
})


module.exports = router;