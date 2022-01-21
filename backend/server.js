import express from 'express'
import data from './data.js'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/api/products', (req, res) => {
    res.json(data.products)
})

app.get('/', (req, res) => {
    res.send('Server is ready!!!!')
})


const port = process.env.PORT || 3003
app.listen(3003, () => {
    console.log(`Server at http://localhost:${port}`)
})