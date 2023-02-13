const express = require('express')
const { handle404 } = require('../lib/custom-errors')
const { requireToken } = require('../config/auth')
const router = express.Router()

const Record = require('../models/record')

router.route('/')

// CREATE 
// POST /liner-notes // love having good path comments / notes
.post(requireToken, (req, res, next) => { // interesting pattern to dot off the route when removed this way 
    const recordId = req.body.linerNote.recordId
    // be mindful of inconsistent whitespace
    const linerNote = req.body.linerNote
    linerNote.owner = req.user._id

    Record.findById(recordId)
        .then(handle404)
        .then((record) => {
            if (record.linerNotes.length == 0) {
                // see 14
                record.linerNotes.push(linerNote)
                return record.save()
            }
            else {
                return // could we return an error here instead of undefined ? 
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
    // see line 14
    const linerNoteBody = req.body.linerNote

    Record.findById(recordId)
        .then(handle404)
        .then(record => {
            const linerNote = record.linerNotes.id(req.params.id)
            // see line 14
            linerNote.set(linerNoteBody)
            // see line 14
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
            // see line 14
            return record.save()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})

module.exports = router