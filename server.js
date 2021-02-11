const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// may not have to do this here because it is in the seed.js
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// INSERT CODE HERE

// get index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// get exercise.html
app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "public/exercise.html"));
});

// get stats.html
app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "public/stats.html"))
});
// GET last workout "/api/workouts" (find method)

app.get("/api/workouts", (req, res) => {
  db.Workout.find()
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.json(err)
    })
})

// ADD an exercise "/api/workouts/:id" (put method)



// CREATE workout "/api/workouts" (post method)

// GET workout range "/api/workouts/range"




app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  