import express from 'express'
import data from './data.js'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/api/products', (req, res) => {
    res.json(data.products)
})

app.get('/api/products/:id', async (req, res) => {
    const { id } = req.params
    const idNr = await data.products.find(item => item._id === id)

    if (!idNr) {  
      res.status(404).send('No product by that Id')
    } else {
      res.json(idNr)
    }
  })

  
app.get('/', (req, res) => {
    res.send('Server is ready!!!!')
})


const port = process.env.PORT || 3003
app.listen(3003, () => {
    console.log(`Server at http://localhost:${port}`)
})