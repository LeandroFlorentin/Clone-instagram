const Cuenta = require('../models/cuenta.js');
const express = require('express');

const app = express()

app.post('/', (req, res) => {
  const { email, password } = req.body;
  console.log(email)
  try {
    const mail = Cuenta.findOne({ where: { correo: email } })
    const contrasena = Cuenta.findOne({ where: { contrasena: password } })
    if (mail || contrasena) res.status(404).json("Contraseña incorrecta.")
    res.status(200).json("Contraseña correcta")
  } catch (error) {
    res.status(404).json({ message: error })
  }
})

module.exports = app;