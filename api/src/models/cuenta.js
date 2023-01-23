const { DataTypes } = require('sequelize')
const { conn } = require('../db.js')

const Cuenta = conn.define('Cuenta', {
  correo: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  nombre: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  usuario: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  contrasena: {
    type: DataTypes.TEXT,
    allowNull: false
  }
})

module.exports = Cuenta;

