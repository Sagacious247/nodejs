require('dotenv').config()
const express = require('express')
const connectDB = require('./db/connect')

const tourRouter = require('./routes/tourRoute')

const app = express()

app.use('/api/v1/tours', tourRouter)

const port = process.env.PORT || 3000
const start = async () => {
   try {
      await connectDB(process.env.DATABASE)
      app.listen(port, console.log(`Server is listening on port ${port}`))
   } catch (error) {
      console.log(error)
   }
}

start()