const express = require('express');
const router = express.Router();
const {Reportes} = require('../modelos/reportes');


//TRAE TODOS LOS REPORTES
router.get('/getReportes', (req,res) => {
    Reportes.find().then(response => {
        res.send(response)
    }).catch(err => {
        res.send(err)
    })
})

//INSERTA REPORTE
router.post('/addReporte', (req,res) => {
    console.log(req.body.name)
    Reportes.create({
        Departamento: req.body.Departamento,
        NumSerie: req.body.NumSerie,
        info: req.body.info,
        estado: req.body.estado,
    }, err => {
        console.log(err)
        if(!err){
            res.send("Reporte Agregado!")
        }else{
            res.send("Hubo un problema, agregando el reporte")
        }
    })
});

module.exports = router;