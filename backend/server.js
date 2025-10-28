const express = require('express')

const workoutsRoutes = require('./routes/workouts')

const mongoose=require('mongoose')

require('dotenv').config()

// express app
const app=express()

app.use(express.json())  // so req.body works


app.use((req,res,next) => {
    console.log(req.path,req.method)
    next()
})

app.use('/api/workouts', workoutsRoutes)


mongoose.connect(process.env.MONG_URI)
.then(() => {
  app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
}) })
.catch((error) => {
    console.log(error)
})
