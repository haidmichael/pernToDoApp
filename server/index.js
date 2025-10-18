import express from 'express'
import cors from 'cors'
import { pool } from './db.js'

const app = express() 
const PORT = 5000

// Middleware
app.use(cors())
app.use(express.json()) // gets access to req.body

// Routes 

// create a todo
app.post('/todos', async (req, res) => {
    try {
        console.log(req.body)
    } catch (err) {
        console.error(err.message)
    }
})

// get all todos

// get a todo

// update a todo

// delete a todo 

app.listen(PORT, () => {
    console.log(`Server is working down here on Port ${PORT}`)
})