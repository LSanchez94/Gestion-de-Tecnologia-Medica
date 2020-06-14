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
        proveedor: req.proveedor 
    }, err => {
        console.log(err)
        if(!err){
            res.send("Refacción Agregada!")
        }else{
            res.send("Hubo un problema, agregando la refacción")
        }
    })
});

module.exports = router;