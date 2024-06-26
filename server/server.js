require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
const express = require('express')
const app = express()

const indexRouter = require('./routes/index')

const PORT = process.env.PORT || 8080
const ulri='mongodb+srv://abhishekyadavfeb1498:PZSkBHEaJoPolFfX@urlshortener.g14tixv.mongodb.net/?retryWrites=true&w=majority&appName=URLShortener'

app.get('/test', (req, res) => {
    res.send('test route')
})

// Enable CORS for all origins
app.use(cors())
app.use(express.json())
app.use('/', indexRouter)

mongoose.connect(ulri, {
    useNewUrlParser: true, useUnifiedTopology: true
})
.then(() => console.log('Database connection successfull'))
.catch((err) => console.log('error in db connection', err));


app.listen(PORT, () => { console.log(`Server running on ${PORT}`) })