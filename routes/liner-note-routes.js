const express = require('express')
const router = express.Router()

const Record = require('../models/record')
const { handle404 } = require('../lib/custom-errors')
const { requireToken } = require('../config/auth')

// CREATE
// POST /liner-notes
router.post('/liner-notes', requireToken, (req, res, next) => {
    const recordId = req.body.linerNote.recordId

    console.log(req.user)
    
    const linerNote = req.body.linerNote
    linerNote.owner = req.user._id

    Record.findById(recordId)
        .then(handle404)
        .then(record => {
            if (record.linerNotes.length = 0) {

                record.linerNotes.push(linerNote)

                return record.save()
            }
            else {
                return
            }
        })
        .then(record => {
            res.status(201).json({ record: record })
        })
        .catch(next)
})

// UPDATE
// PATCH /liner-notes/:liner-noteId
router.patch('/liner-notes/:liner-noteId', (req, res, next) => {
    const recordId = req.body.linerNote.recordId

    const linerNoteBody = req.body.linerNote

    Record.findById(recordId)
        .then(handle404)
        .then(record => {
            const linerNote = record.linerNotes.id(req.params.linerNoteId)

            linerNote.set(linerNoteBody)

            return record.save()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})

// DELETE
// DELETE /liner-notes/:liner-noteId
router.delete('/liner-notes/:liner-noteId', (req, res, next) => {
    const recordId = req.body.linerNote.recordId

    Record.findById(recordId)
        .then(handle404)
        .then(record => {

            record.linerNotes.id(req.params.linerNoteId).remove()

            return record.save()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})

module.exports = router