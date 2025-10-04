import express from 'express'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'

dotenv.config()

const app = express()

//DB connection
connectDB()

// Middleware
const corsOptions = {
    origin : 'http://localhost:5173',
    credentials: true
}
app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))


//Routes
app.get('/',(req,res) => {
    res.send('API is running...')
})


//Server
const PORT = process.env.PORT
app.listen(PORT,()=> {
    console.log(`Server running on port ${PORT}`)
})