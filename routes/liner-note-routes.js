const express = require('express')
const { handle404 } = require('../lib/custom-errors')
const { requireToken } = require('../config/auth')
const router = express.Router()

const Record = require('../models/record')

router.route('/')

// CREATE
// POST /liner-notes
.post(requireToken, (req, res, next) => {
    const recordId = req.body.linerNote.recordId
    
    const linerNote = req.body.linerNote
    linerNote.owner = req.user._id

    Record.findById(recordId)
        .then(handle404)
        .then((record) => {
            if (record.linerNotes.length == 0) {

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


router.route('/:id')

// UPDATE
// PATCH /linerNotes/:id
.patch(requireToken, (req, res, next) => {
    const recordId = req.body.linerNote.recordId

    const linerNoteBody = req.body.linerNote

    Record.findById(recordId)
        .then(handle404)
        .then(record => {
            const linerNote = record.linerNotes.id(req.params.id)

            linerNote.set(linerNoteBody)

            return record.save()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})

// DELETE
// DELETE /linerNotes/:id
.delete(requireToken, (req, res, next) => {
    const recordId = req.body.linerNote.recordId

    Record.findById(recordId)
        .then(handle404)
        .then(record => {
            record.linerNotes.id(req.params.id).remove()

            return record.save()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})

module.exports = router