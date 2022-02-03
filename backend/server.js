import express from 'express'
import data from './data.js'
import cors from 'cors'
import mongoose from 'mongoose'
import VinlySchema from "./schemas/vinyl.js";

// import crypto from 'crypto'
// import bcrypt from 'bcrypt'

// import { UserSchema } from "./Schemas/user";

const app = express()

app.use(cors())
app.use(express.json())

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/vinylAPI"
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise


const TestSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
})

const TestMessage = mongoose.model("TestMessage", TestSchema)

app.post("/api/products/vinyl", async (req, res) => {
  const { message } = req.body
  try {
    const newTestMessage = await new TestMessage({ message }).save
    res.status(201).json({ response: newTestMessage, success: true })
  } catch (error) {
    res.status(400).json({ response: error, success: false })
  }
})

//

// GET all products
app.get('/api/products', (req, res) => {
  res.json(data.products)
})

// GET a list of products by querying their genre: api/products/genre?genre="genrename"
app.get("/api/products/genre", (req, res) => {
  const { genre } = req.query
  let vinylsGenreData = data.products

  if (genre) {
    vinylsGenreData = vinylsGenreData.filter(
      (item) => item.genre.toLowerCase().indexOf(genre.toLowerCase()) !== -1
    )
  }
  res.json(vinylsGenreData)
})

// GET for searching artists: api/products/name?name="searchname"  
app.get("/api/products/name", (req, res) => {
  const { name } = req.query
  let vinylsNameData = data.products

  if (name) { 
    vinylsNameData = vinylsNameData.filter(
      (item) => item.name.toLowerCase().indexOf(name.toLowerCase()) !== -1
    )
  }
  res.json(vinylsNameData)
})

// GET products by ID
app.get('/api/products/id/:id', (req, res) => {
  const { id } = req.params
  const idNr = data.products.find(item => item._id === id)

  if (!idNr) {  
    res.status(404).send('No product by that Id')
  } else {
    res.json(idNr)
  }
})

// Root
app.get('/', (req, res) => {
    res.send('Server is ready!!!!')
})

// Server running?
const port = process.env.PORT || 3003
app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`)
})