const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const connectDB = require('./config/db')
const port = process.env.PORT || 5500
const colors = require('colors')

const app = express()
connectDB()
// Set up middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/goals', require('./routes/goalRoutes'))


app.listen(port, () => console.log(`Server started on port ${port}`))


