const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const db = require('./config/db')
const PORT = 7777

const requestLogger = require('./lib/request-logger')
const recordSeed = require('./lib/record-seed')
const recordRoutes = require('./routes/record-routes')
const linerNoteRoutes = require('./routes/liner-note-routes')
const userRoutes = require('./routes/user-routes')

mongoose.set('strictQuery', true)

mongoose.connect(db, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

const app = express()

app.use(cors({ origin: `http://127.0.0.1:5500` }))

app.use(express.json())
app.use(requestLogger)

app.use('/seed', recordSeed)
app.use('/records', recordRoutes)
app.use('/liner-notes', linerNoteRoutes)
app.use(userRoutes)

app.listen(PORT, () => {
	console.log('listening on port ' + PORT)
})

module.exports = app