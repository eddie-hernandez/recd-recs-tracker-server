const express = require('express')
const { handle404 } = require('../lib/custom-errors')
// const { requireToken } = require('../config/auth')
const router = express.Router()

const Record = require('../models/record')

// INCLUDE WHEN USER SIGN IN IS READY:
// router.post('/', requireToken, (req, res, next) => {

// CREATE
// POST /liner-notes
router.post('/', (req, res, next) => {
    const recordId = req.body.linerNote.recordId
    
    const linerNote = req.body.linerNote
    // adding an owner
    linerNote.owner = req.user._id

    // find the Record that I want to add the note too
    // once found `push` the note into the Mongoose Array
    // send status of 201 created if success
    // next if failure
    Record.findById(recordId)
        .then(handle404)
        .then(record => {
            record.linerNotes.push(linerNote)

            // just because we pushed a note up here ^^, does
            // not mean that the note will persist
            // we HAVE to save the doc when modified
            return record.save()
        })
        .then(record => {
            res.status(201).json({ record: record })
        })
        .catch(next)
})

router.route('/:id')

// UPDATE
// PATCH /linerNotes/:id
.patch((req, res, next) => {
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
// DELETE /linerNotes/:noteId
.delete((req, res, next) => {
    const recordId = req.body.linerNote.recordId

    Record.findById(recordId)
        .then(handle404)
        .then(record => {
            // finding the correct note to remove (determined by
            // the record we select)
            // using .remove(), we delete it
            record.linerNotes.id(req.params.id).remove()

            // since I've modified I have to save
            return record.save()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})

module.exports = router












/*

// CREATE
// POST /linerNotes
router.post('/linerNotes', (req, res, next) => {
    const recordId = req.body.linerNote.recordId
    
    const linerNote = req.body.linerNote
    // adding an owner
    linerNote.owner = req.user._id

    // find the Record that I want to add the note too
    // once found `push` the note into the Mongoose Array
    // send status of 201 created if success
    // next if failure
    Record.findById(recordId)
        .then(handle404)
        .then(record => {
            record.linerNotes.push(linerNote)

            // just because we pushed a note up here ^^, does
            // not mean that the note will persist
            // we HAVE to save the doc when modified
            return record.save()
        })
        .then(record => {
            res.status(201).json({ record: record })
        })
        .catch(next)
})

// UPDATE
// PATCH /linerNotes/:id
router.patch('/linerNotes/:linerNoteId', (req, res, next) => {
    const recordId = req.body.linerNote.recordId

    const linerNoteBody = req.body.linerNote

    Record.findById(recordId)
        .then(handle404)
        .then(record => {
            // finding the note by it's id
            const linerNote = record.linerNotes.id(req.params.linerNoteId)

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
// DELETE /linerNotes/:noteId
router.delete('/linerNotes/:linerNoteId', (req, res, next) => {
    const recordId = req.body.linerNote.recordId

    Record.findById(recordId)
        .then(handle404)
        .then(record => {
            // finding the correct note to remove (determined by
            // the record we select)
            // using .remove(), we delete it
            record.linerNotes.id(req.params.linerNoteId).remove()

            // since I've modified I have to save
            return record.save()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})

*/