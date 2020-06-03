const express = require('express');
const router = express.Router();
const {Capacitacion} = require('../modelos/capacitacion');
const {Calendario} = require('../modelos/calendario');


//TRAE DATOS CAPACITACION
router.get('/getEventData', (req,res) => {
    Capacitacion.find().then(response => {
        res.send(response)
    }).catch(err => {
        res.send(err)
    })
})


//CREA CAPACITACION
router.post('/addCap', (req,res) => {
    console.log("Capa");
    console.log(req.body.fecha)
    var fechas = req.body.fecha.split('-');
    var mes = fechas[1];
    Capacitacion.create({
        tema: req.body.tema,
        departamento: req.body.departamento,
        descripcion: req.body.descripcion,
        fecha: req.body.fecha,
        persona: req.body.persona,
    }, err => {
       // console.log(err)
        if(!err){
            Calendario.create({
                dia : fechas[0],
                mes: fechas[1],
                anio: fechas[2],
                tipo: 1
            })
            res.send("Capacitación Agregada!")
        }else{
            res.send("Hubo un problema agregando capacitación")
        }
    })

});

module.exports = router;