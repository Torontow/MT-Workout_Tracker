const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// may not have to do this here because it is in the seed.js
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populatedb", { useNewUrlParser: true });

// INSERT CODE HERE

// GET last workout "/api/workouts" (find method)

// ADD an exercise "/api/workouts/:id" (put method)

// CREATE workout "/api/workouts" (post method)

// GET workout range "/api/workouts/range"




app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  