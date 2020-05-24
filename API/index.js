const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

var app = express();
app.set('trust proxy', true);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

const { mongoose } = require('./db/db-connect');
const usuarios = require('./rutas/usuarios')
const reportes = require('./rutas/reportes')
const inventario= require('./rutas/inventario')
const capacitacion= require('./rutas/Capacitacion')


app.use('/Usuarios', usuarios);
app.use('/Reportes', reportes);
app.use('/Inventario', inventario);
app.use('/Capacitacion', capacitacion);


app.listen(port, () =>{
    console.log('Me inicie bien en el puerto 3000');
})

