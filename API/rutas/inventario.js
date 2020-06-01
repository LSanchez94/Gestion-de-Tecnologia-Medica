const express = require('express');
const router = express.Router();
const {Inventario} = require('../modelos/inventario');


//TRAE TODA LA INFO DE UN DM EN INVENTARIO
router.get('/getDMdata', (req,res) => {
    Inventario.find().then(response => {
        res.send(response)
    }).catch(err => {
        res.send(err)
    })
})


//INSERTA DATO
router.post('/addDM', (req,res) => {
    console.log(req.body.name)
    Inventario.create({
        serie: req.body.serie,
        estado: req.body.estado,
        adquisicion: req.body.adquisicion,
        marca: req.body.marca,
        garantia: req.body.garantia,
        Departamento: req.body.Departamento,
        modelo: req.body.modelo,
        mantenimientos: req.body.mantenimientos,
        
    }, err => {
        console.log(err)
        if(!err){
            res.send("DM Agregado!")
        }else{
            res.send("Hubo un problema, agregando el DM")
        }
    })
});

module.exports = router;