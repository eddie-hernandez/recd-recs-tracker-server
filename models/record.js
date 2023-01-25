const mongoose = require('mongoose')
const linerNoteSchema = require('./liner-note')

const Schema = mongoose.Schema

const recordSchema = new Schema(
    {
        albumTitle: {
            type: String,
            required: true,
        },
        artistName: {
            type: String,
            required: true,
        },
        yearReleased: {
            type: Number,
            required: true,
            min: 1,
            max: 2023
        },
        Comments: {
            type: String,
            required: false,
        },
        linerNotes: [linerNoteSchema]
    }, 
    {
        timestamps: true
    }
)

const Record = mongoose.model('Record', recordSchema)

module.exports = Record