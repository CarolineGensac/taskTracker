const express = require('express')
const mongoose = require ('mongoose')

require('dotenv').config()

const app = express()
const PORT = process.env.port || 8080

app.listen(PORT, ()=> console.log(`Listening on ${PORT}`))