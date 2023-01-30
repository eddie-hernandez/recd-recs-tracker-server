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
        comments: {
            type: String,
            required: false,
        },
        linerNotes: [linerNoteSchema],
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
    }, 
    {
        timestamps: true
    }
)

const Record = mongoose.model('Record', recordSchema)

module.exports = Record