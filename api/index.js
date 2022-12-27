const { conn } = require('./src/db.js')
const server = require('./src/app.js')
require('dotenv').config()

const {
    PORT
} = process.env

conn.sync({ force: true }).then(() => {
    server.listen(PORT || 3001, () => {
        console.log("andando en " + PORT)
    })
})