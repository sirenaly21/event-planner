const express = require("express")
const cors = require("cors")

const dbPool = require("pg").Pool
const app = express()
const bodyParser = require("body-parser")
const port = process.env.port || 3005

require('dotenv').config()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.listen(port, (error) => {
    if (error) 
    {
        throw error;
    }

    // Log if successful
    console.log('Server running on port: ' + port)
})

const db = new dbPool({
    user: 'postgres',
    password: process.env.password,
    database: process.env.dbName,
    host: 'localhost',
    port: process.env.port | 0, // | 0 to convert to int
    max: 10
})

db.connect((error, connection) => {
    if (error) 
    {
        throw error;
    }
    
    // Log if successful
    console.log('Connecting to database was successful.')
})