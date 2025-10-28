const express = require('express')
const Workout = require('../models/workoutModel')
const router = express.Router()
// GET all workouts
router.get('/', async (req, res) => {
 const workouts = await Workout.find({}).sort({createdAt: -1})
 res.status(200).json(workouts)
 })
// POST a new workout
router.post('/', async (req, res) => {
 const {title, load, reps} = req.body

 try {
 const workout = await Workout.create({title, load, reps})
 res.status(200).json(workout)
 } catch (error) {
 res.status(400).json({error: error.message})
 }
})
module.exports = router