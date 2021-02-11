const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')

const path = require('path')

const PORT = process.env.PORT || 3000

const db = require('./models')

const app = express()

app.use(logger('dev'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('public'))

// may not have to do this here because it is in the seed.js
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true
})

// HTML ROUTES

// get index.html--DONE
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

// get exercise.html--DONE
app.get('/exercise', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/exercise.html'))
})

// get stats.html--DONE
app.get('/stats', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/stats.html'))
})
// GET last workout "/api/workouts" (find method)

// API ROUTES

app.get('/api/workouts', (req, res) => {
  db.Workout.aggregate([
    {
      $addFields: { totalDuration: { $sum: '$exercises.duration' } }
    }
  ])
    .then(dbWorkouts => {
      res.json(dbWorkouts)
    })
    .catch(err => {
      res.json(err)
    })
})

// ADD an exercise "/api/workouts/:id" (put method)

app.put('/api/workouts/:id', (req, res) => {
  db.Workout.findByIdAndUpdate(
    { _id: req.params.id },
    { $push: { exercises: req.body } }
  )
    .then(dbWorkouts => {
      res.json(dbWorkouts)
    })
    .catch(err => {
      res.json(err)
    })
})
// CREATE workout "/api/workouts" (post method)

app.post('/api/workouts/', (req, res) => {
  db.Workout.create({})
    .then(dbWorkouts => {
      res.json(dbWorkouts)
    })
    .catch(err => {
      res.json(err)
    })
})

app.get('/api/workouts/range', (req, res) => {
  db.Workout.aggregate([
    {
      $addFields: { totalDuration: { $sum: 'exercises.duration' } }
    }
  ])
    .sort({ day: -1 })
    .limit(7)
    .then(dbWorkouts => {
      console.log(dbWorkouts);
      res,json(dbWorkouts.reverse())
    })
    .catch(err => {
      res.json(err)
    })
})

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`)
})
