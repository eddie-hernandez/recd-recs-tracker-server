const express = require('express')
const { handle404 } = require('../lib/custom-errors')
const { requireToken } = require('../config/auth')
const router = express.Router()

const Record = require('../models/record')

// INCLUDE WHEN USER SIGN IN IS READY:
// router.post('/', requireToken, (req, res, next) => {


router.route('/')
// CREATE
// POST /liner-notes
.post(requireToken, (req, res, next) => {
    const recordId = req.body.linerNote.recordId

    // console.log(req.user)
    
    const linerNote = req.body.linerNote
    // linerNote.owner = req.user._id

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
            // finding the note by it's id
            const linerNote = record.linerNotes.id(req.params.id)

            // setting the new note content to be the content passed in
            linerNote.set(linerNoteBody)

            // saving it
            // I have modified the doc I need to save it
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
            // finding the correct note to remove (determined by
            // the artist we select)
            // using .remove(), we delete it
            record.linerNotes.id(req.params.id).remove()

            // since I've modified I have to save
            return record.save()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})

module.exports = router