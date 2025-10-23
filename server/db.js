/***************** This is the Database Connection ******************/
import dotenv from 'dotenv' 
import pkq from 'pg'
const { Pool } = pkq 
dotenv.config()

export const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
})

pool.query('SELECT NOW()', (err, res) => {
  if(err) {
    console.error('Error connecting to the database', err.stack)
  } else {
    console.log('Database connected successfully')
  }
})