// 1. Require express
const express = require("express");
// 6. Create a path
const path = require("path");
// 2. Create an instance of express called app
const app = express();
// 3. Add a PORT
const PORT = process.env.PORT || 3000;

// 5. Add data processing for POST routes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 7. View / HTML
app.get("/", (req, res) => {
  //   res.send("Hello World!");
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", (req, res) => {
  // res.send("Hello World!");
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

// API / JSON

// 4. Listen on that PORT
app.listen(PORT, (req, res) => {
  console.log(`Currently running on http://localhost:${PORT}`);
});