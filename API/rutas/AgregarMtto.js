const express = require('express');
const router = express.Router();
const {AgregarMtto} = require('../modelos/AgregarMtto');
const {Calendario} = require('../modelos/calendario');

//TRAE DATOS DEL MTTO
router.get('/getMtto', (req,res) => {
    AgregarMtto.find().then(response => {
        res.send(response)
    }).catch(err => {
        res.send(err)
    })
})


//INSERTA DATO
router.post('/addMtto', (req,res) => {
   //console.log("Mtto");
   //console.log(req.body.fechamantenimientos)
    var fechas = req.body.fechamantenimientos.split('-');
   var mes = fechas[1]-1;
    AgregarMtto.create({
        nserie: req.body.nserie,
        departamento: req.body.departamento,
        tipomantenimientos: req.body.tipomantenimientos,
        fechamantenimientos: req.body.fechamantenimientos,
        encargado: req.body.encargado,
    }, err => {
        // console.log(err)
         if(!err){
            Calendario.create({
                anio : fechas[0],
                mes: fechas[1],
                dia: fechas[2] +''+mes+''+fechas[0],
                tipo: 2,
             })
             res.send("Mantenimiento Agregado!")
         }else{
             res.send("Hubo un problema agregando el mantenimiento")
         }
     })
});

module.exports = router;