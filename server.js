import express from 'express'
import lookup from 'binlookup'
import axios from 'axios'
import dotenv from 'dotenv';
import colors from 'colors';
import http from 'http'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import testRoutes from './routes/testRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())


app.use('/api/users', userRoutes)
app.use('/api/tests', testRoutes)

const PORT = 5000

app.get('/api', (req, res) => {
    res.send('API is running')
})

app.use(notFound)

app.use(errorHandler)






app.listen(PORT, console.log(`Server running on ${PORT}`))