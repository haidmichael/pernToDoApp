import express from 'express'
const app = express() 
import cors from 'cors'
import { pool } from './db.js'
const PORT = 3000


// Middleware
app.use(express.json()) // gets access to req.body
app.use(cors())

// Routes 

// create a todo
app.post('/todos', async (req, res) => {
    try {
        const { description } = req.body 
        // console.log(req.body)
        const newTodo = await pool.query(
            'INSERT INTO todo (description) VALUES($1)', 
            [description]
        )
        res.json(newTodo)
    } catch (err) {
        console.error(err.message)
    }
})


// ########## Testing Connection ##########
app.get('/health', async(req, res) => {
    return res.status(200).json({
        message: 'Okay', 
        status: '200'
    })
})

// get all todos

// get a todo

// update a todo

// delete a todo 

app.listen(PORT, () => {
    console.log(`Server is working down here on Port ${PORT}`)
})