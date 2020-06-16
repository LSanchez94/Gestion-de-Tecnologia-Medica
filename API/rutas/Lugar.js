const express = require('express');
const router = express.Router();
const {Lugar} = require('../modelos/Lugar');

router.post('/addLugar', (req,res) => {
    console.log(req.body.name)
    Lugar.create({
        posicion: req.body.posicion,
    }, err => {
        console.log(err)
        if(!err){
            res.send(" ")
        }else{
            res.send("Hubo un problema agregando el lugar")
        }
    })
});


router.get('/getLugar', (req,res) => {
    Lugar.find().then(response => {
        res.send(response)
    }).catch(err => {
        res.send(err)
    })
})
module.exports = router;