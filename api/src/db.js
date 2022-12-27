require('dotenv').config()
const {
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    DB_HOST
} = process.env
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
    logging: false
})

module.exports = {
    conn: sequelize
}