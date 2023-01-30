const express = require('express')
const { requireToken } = require('../config/auth')
const { handle404 } = require('../lib/custom-errors')

const Record = require('../models/record')

const router = express.Router()

router.route('/')
// CREATE RECORD
.post(requireToken, (req, res, next) => {
    const record = req.body.record
    record.owner = req.user._id


    Record.create(req.body.record)

        .then((record) => {
            res.status(201).json({ record: record })
        })
    .catch(next)
})
// INCLUDE WHEN USER SIGN IN IS READY
// .get(requireToken, (req, res, next) => {
// INDEX RECORDS
.get(requireToken, (req, res, next) => {
    Record.find(
        {
        'owner': req.user._id
    }
    )

        .then(records => {
            return records.map(record => record)
        })
        .then(records => {
            res.status(200).json({ records: records })
        })
    .catch(next)
})


router.route('/:id')
// SHOW RECORD BY ID
.get(requireToken, (req, res, next) => {
    Record.findById(req.params.id)
        .then(record => {
            res.status(200).json({ record: record })
        })
        .catch(next)
})
// UPDATE RECORD BY ID
.patch(requireToken, (req, res, next) => {
    Record.findById(req.params.id)
        .then(handle404)
        .then(record => {
            return record.updateOne(req.body.record)
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})
// DELETE RECORD BY ID
.delete(requireToken, (req, res, next) => {
    Record.findById(req.params.id)
        .then(handle404)
        .then(record => {
            return record.deleteOne()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})

module.exports = router