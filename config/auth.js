const passport = require('passport')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const secret = process.env.JWT_SECRET || 'some string value only your app knows'

const { Strategy, ExtractJwt } = require('passport-jwt')

const opts = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: secret,
}

const User = require('../models/user')

const strategy = new Strategy(opts, function (jwt_payload, done) {

	User.findById(jwt_payload.id)
		.then((user) => done(null, user))
		.catch((err) => done(err))
})

passport.use(strategy)

passport.initialize()

const requireToken = passport.authenticate('jwt', { session: false })


const createUserToken = (req, user) => {

	if (
		!user ||
		!req.body.credentials.password ||
		!bcrypt.compareSync(req.body.credentials.password, user.password)
	) {
		const err = new Error('The provided username or password is incorrect')
		err.statusCode = 422
		throw err
	}
	return jwt.sign({ id: user._id, username: user.username }, secret, { expiresIn: 3600 })
}

module.exports = {
	requireToken,
	createUserToken,
}