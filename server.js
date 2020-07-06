  // 1. Require express
const express = require("express");
const path = require("path");
// 2. Create an instance of express called app
const app = express();
// 3. Add a PORT
const PORT = process.env.PORT || 3000;

// 5. Add data processing for POST routes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// View / HTML
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// API / JSON

// 4. Listen on that PORT
app.listen(PORT, (req, res) => {
  console.log(`Currently running on http://localhost:${PORT}`);
});