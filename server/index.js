import express from 'express'
import cors from 'cors'

const app = express() 
const PORT = 5000

// Middleware
app.use(cors())
app.use(express.json()) // gets access to req.body

app.listen(PORT, () => {
    console.log(`Server is working down here on Port ${PORT}`)
})