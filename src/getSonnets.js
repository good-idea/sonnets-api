const sonnets = require('./sonnets.json')

module.exports.getSonnetTitles = (req, res) => {
	const titles = sonnets.map((sonnet, index) => ({
		number: index + 1,
		firstLine: sonnet.lines[0],
		title: `${index + 1}: ${sonnet.lines[0]}`,
	}))
	return res.json(titles)
}

module.exports.getSonnet = (req, res) => {
	const { number } = req.params
	// The sonnets aren't 0-indexed! Shakespeare was apparently not a programmer.
	// Make sure that a request for /api/sonnets/1 gives us sonnet #1, which is [0] in our array.
	const sonnet = sonnets[number - 1]
	if (!sonnet) {
		return res.json({
			error: `There is no sonnet #${number}! Shakespeare only wrote 154 sonnets, please request 1 - 154 `,
		})
	}
	return res.json(sonnet)
}
