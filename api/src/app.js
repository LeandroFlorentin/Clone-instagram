const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const Rutas = require('./routes')

const server = express()

server.use(cors())
server.use(morgan('dev'))
server.use(express.json())
server.use('/', Rutas)

module.exports = server