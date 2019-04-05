const express = require('express')
const cors = require('cors')
const { getSonnet, getTableOfContents } = require('./getSonnets')

const app = express()

app.use(cors())
app.get('/api/sonnets/toc', getTableOfContents)
app.get('/api/sonnets/:number', getSonnet)

app.listen('3030', () => {
	console.log('🖋 Sonnets API running on port 3000')
})

const { data: weatherData = {}, notFound } = this.state
const {
	name: cityName = '',
	main: { temp, pressure } = {},
	weather: weatherArray = [],
	coord = {},
	dt = Date.now(),
} = weatherData

const { icon } = weatherArray[0] || [{ icon: '01d' }]

const cityCenter = [coord.lat || 51, coord.lon || -0.1]
