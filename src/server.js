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
