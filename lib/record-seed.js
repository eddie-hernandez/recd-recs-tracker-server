const express = require('express')

const Record = require('../models/record')

const router = express.Router()

const startRecords = [
	{
		albumTitle: 'Songs of Innocence',
		artistName: 'U2',
		yearReleased: 2014,
		comments: "an album that MAY have been good had it not been added to millions of iTunes uers' libraries without their consent.",
	},
	{
		albumTitle: 'Songs of Guilt',
		artistName: 'U2',
		yearReleased: 2016,
		comments: "an album made in response to the backlash of importing 'Songs of Innocence' to millions of iTunes users' libraries.",
	},
	{
		albumTitle: 'Under the Table and Dreaming',
		artistName: 'Dave Matthews Band',
		yearReleased: 1994,
		comments: "This album was recommended to me from someone who had been affected by the cruise ship poop dump event. They somehow do not resent Dave Matthews Band for releasing dump from their tour bus and live by this album to this day."
	},
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