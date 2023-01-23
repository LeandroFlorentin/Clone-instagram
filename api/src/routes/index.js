const express = require('express');
const app = express();
const crearCuenta = require('../controllers/crearCuenta.js')
const iniciarCuenta = require('../controllers/iniciandoSesion.js')

app.use('/crearUsuario', crearCuenta)
app.use('/iniciandoSesion', iniciarCuenta)

module.exports = app;