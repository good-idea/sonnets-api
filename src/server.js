const express = require('express')
const { getSonnet, getSonnetTitles } = require('./getSonnets')

const app = express()

app.get('/api/sonnets/titles', getSonnetTitles)
app.get('/api/sonnets/:number', getSonnet)

app.listen('3030', () => {
	console.log('🖋 Sonnets API running on port 3000')
})
