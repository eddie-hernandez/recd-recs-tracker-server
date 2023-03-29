const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
	{
    username: {
      type: String,
      required: true,
      maxlength: 20,
      unique: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      trim: true,
      minlength: 3,
    },
		token: String,
	},
	{
		timestamps: true,
		toJSON: {
			transform: (_doc, user) => {
				delete user.password
				return user
			},
		},
	}
)

const User = mongoose.model('User', userSchema)

module.exports = User
