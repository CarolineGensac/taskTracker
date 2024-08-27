const express = require('express')
const mongoose = require ('mongoose')

require('dotenv').config()

const app = express()
const PORT = process.env.port || 8080


mongoose 
.connect(process.env.MONGODB_URL)
.then(()=> console.log(`Connected To mONGODB...`))
.catch((err) => console.log(err))


app.listen(PORT, ()=> console.log(`Listening on ${PORT}`))