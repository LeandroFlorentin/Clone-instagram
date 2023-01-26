const Cuenta = require('../models/cuenta.js');
const express = require('express');
const bcrypt = require('bcryptjs');

const app = express()

app.post('/', async (req, res) => {
  const { correo, nombre, usuario, contrasena } = req.body;
  try {
    let hash = await bcrypt.hash(contrasena, 8)
    let existeCorreo = await Cuenta.findOne({ where: { correo } })
    let existeUsuario = await Cuenta.findOne({ where: { usuario } })
    if (existeCorreo || existeUsuario) res.status(404).json({ message: "Usuario existente" })
    else {
      await Cuenta.create({
        correo,
        nombre,
        usuario,
        contrasena: hash
      })
      res.status(200).json({ message: true })
    }
  } catch (error) {
    res.status(404).json({ message: error })
  }
})

module.exports = app;