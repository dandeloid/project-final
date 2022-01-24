import express from 'express'
import data from './data.js'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/api/products', (req, res) => {
    res.json(data.products)
})

app.get('/api/products/:id', (req, res) => {
    const { id } = req.params
    const idNr = data.products.find(item => item._id === id)

    if (!idNr) {  
      res.status(404).send('No product by that Id')
      console.log("id:", id)
      console.log("data.products", data.products)
    } else {
      res.json(idNr)
    }
  })

  
///////
// app.get('/books/id/:id', (req, res) => {
//     const { id } = req.params
  
//     const bookNR = books.find(item => item.bookID === +id)
  
//     if (!bookNR) {
//       res.status(404).send('No book found!')
//     } else {
//       res.json(bookNR)
//     }
//   })
//////////




app.get('/', (req, res) => {
    res.send('Server is ready!!!!')
})


const port = process.env.PORT || 3003
app.listen(3003, () => {
    console.log(`Server at http://localhost:${port}`)
})