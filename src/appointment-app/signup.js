const express = require("express");
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors()); // To handle CORS

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_appointments",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to database.");
});

// Sign-up endpoint
app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send("All fields are required");
  }

  const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const query =
    "INSERT INTO doctor_signup (full_name, email, password) VALUES (?, ?, ?)";

  db.query(query, [name, email, hashedPassword], (err, results) => {
    if (err) {
      return res.status(500).send("Server error");
    }
    res.status(201).send("User created successfully");
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
