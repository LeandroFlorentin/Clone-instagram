const Cuenta = require('../models/cuenta.js');
const express = require('express');
const bcrypt = require('bcryptjs');

const app = express()

app.post('/', async (req, res) => {
  const { email, password } = req.body;
  try {
    const mail = await Cuenta.findOne({ where: { correo: email } })
    const comparar = await bcrypt.compare(password, mail.contrasena)
    if (mail && comparar) res.status(200).json({ valor: true })
    else res.status(200).json({ valor: false })
  } catch (error) {
    res.status(404).json({ message: error })
  }
})

module.exports = app;