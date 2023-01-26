class RecordNotFoundError extends Error {
	constructor() {
		super()
		this.name = 'RecordNotFoundError'
		this.message = `There is no Record with the id of ${req.params.id}`
	}
}

const handle404 = (record) => {
	if (!record) {
		throw new RecordNotFoundError()
	} else {
		return record
	}
}

module.exports = {
	handle404
}