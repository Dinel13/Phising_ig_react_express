require ('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()

const port = process.env.PORT || 8080 || config.httpPort
const mongoose = require('mongoose')


mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser : true})
const db = mongoose.connection
db.on('error', err => console.error(err))
db.once('open', () => console.log('terhubung ke monggo'))

app.use(cors())
app.use(express.json())

const penguna = require('./router/penguna')

//to heroku
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('front/build'))
}

app.use('/login', penguna)

app.listen(process.env.PORT || port, ()=> console.log(`server is in ${port}`)) 