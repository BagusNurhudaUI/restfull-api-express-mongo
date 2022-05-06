const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config()
const bodyParser = require('body-parser')
const app = express()

const PORT = process.env.PORT
const mongoData = process.env.DATABASE_URL
const notes = require('./notes')
const routes = require('./routes/routes');


app.use(bodyParser.json())
app.use(express.json())
app.use('/', routes)

mongoose.connect(mongoData, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection
.on('error', (error) => {
    console.log(error)
})
.once('connected', () => {
    console.log('Database Connected');
})


app.get('/notes', (req, res) => {
    res.json({
        notes
    })
})

app.listen(PORT, () => {
    console.log(`Server berjalan pada ${PORT}`);
})
