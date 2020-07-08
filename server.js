// 1. Require express
const express = require("express");
// 6. Create a path
const path = require("path");
// 2. Create an instance of express called app
const app = express();
// 3. Add a PORT
const PORT = process.env.PORT || 3000;
// Require database and filesystem
const database = require("./db/db.json");
const fs = require("fs");

// 5. Add data processing for POST routes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

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

app.get("/api/notes", (req, res) => {
  return res.json(database);
});

app.post("/api/notes", (req, res) => {
  database.push(req.body);
  fs.writeFile(path.join(__dirname, "./db/db.json"),JSON.stringify(database),(err) => {
      if (err) {
        throw err;
      } else {
        console.log("Success!");
      }
    });
  return res.json(database);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

// 4. Listen on that PORT
app.listen(PORT, (req, res) => {
  console.log(`Currently running on http://localhost:${PORT}`);
});