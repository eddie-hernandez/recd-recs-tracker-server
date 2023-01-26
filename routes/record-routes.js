const express = require('express')
const { requireToken } = require('../config/auth')
const { handle404 } = require('../lib/custom-errors')

const Record = require('../models/record')

const router = express.Router()

router.route('/')
// CREATE RECORD
.get((req, res, next) => {
    Record.create(req.body.record)

        .then((record) => {
            res.status(201).json({ record: record })
        })
    .catch(next)
})
// INDEX RECORDS
.get(requireToken, (req, res, next) => {
    Record.find()

        .then(records => {
            return records.map(record => record)
        })
        .then(records => {
            res.status(200).json({ records: records })
        })
    .catch(next)
})

/*

all records ==> /records

// CREATE
router.post('/records', (req, res, next) => {

    Record.create(req.body.record)
        .then((record) => {
            res.status(201).json({ record: record })
        })
        .catch(next)
})

// INDEX
router.get('/records', requireToken, (req, res, next) => {
    Record.find()
        .then(records => {
            return records.map(record => record)
        })
        .then(records => {
            res.status(200).json({ records: records })
        })
        .catch(next)
})

*/

router.route('/:id')
// SHOW RECORD BY ID
.get((req, res, next) => {
    Record.findById(req.params.id)
        .then(record => {
            res.status(200).json({ record: record })
        })
        .catch(next)
})
// UPDATE RECORD BY ID
.patch((req, res, next) => {
    Record.findById(req.params.id)
        .then(handle404)
        .then(record => {
            return record.updateOne(req.body.record)
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})
// DELETE RECORD BY ID
.delete((req, res, next) => {
    Record.findById(req.params.id)
        .then(handle404)
        .then(record => {
            return record.deleteOne()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})


/*

record routes by id ==> /records/:id


// SHOW
router.get('/records/:id', (req, res, next) => {
    Record.findById(req.params.id)
        .then(record => {
            res.status(200).json({ record: record })
        })
        .catch(next)
})

// UPDATE
router.patch('/records/:id', (req, res, next) => {
    Record.findById(req.params.id)
        .then(handle404)
        .then(record => {
            return record.updateOne(req.body.record)
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})

// DELETE
router.delete('/records/:id', (req, res, next) => {
    Record.findById(req.params.id)
        .then(handle404)
        .then(record => {
            return record.deleteOne()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})

*/

module.exports = router