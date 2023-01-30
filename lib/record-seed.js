const express = require('express')

const Record = require('../models/record')

const router = express.Router()

const startRecords = [
	{
		albumTitle: 'Songs of Innocence',
		artistName: 'U2',
		yearReleased: 2014,
		comments: "an album that MAY have been good had it not been added to millions of iTunes uers' libraries without their consent.",
	}
]

router.get('/records', (req, res, next) => {
	Record.deleteMany({})
        .then(() => {
            Record.create(startRecords)
                .then((records) => res.status(200).json({ records: records }))
        })
        .catch(next)
})

module.exports = router