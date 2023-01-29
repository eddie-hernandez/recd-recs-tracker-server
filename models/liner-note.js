const mongoose = require ('mongoose')

const Schema = mongoose.Schema

const linerNoteSchema = new Schema(
	{
		rating: {
			type: Number,
			required: true,
			min: 0,
			max: 10
		},
		standoutTrack: {
			type: String,
			required: false,
		},
		thoughts: {
			type: String,
			required: false,
		},
		owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
	},
	{
		timestamps: true,
	}
)

module.exports = linerNoteSchema