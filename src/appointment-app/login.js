const express = require("express");
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

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

app.post("/doctor_login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send("Email and password are required");
  }

  const query = "SELECT email, password FROM doctor_login WHERE email = ?";
  db.query(query, [email], (err, results) => {
    if (err) {
      return res.status(500).send("Server error");
    }

    if (results.length === 0) {
      return res.status(401).send("Invalid email or password");
    }

    const storedPassword = results[0].password;
    bcrypt.compare(password, storedPassword, (err, result) => {
      if (result) {
        // Successful login
        res.status(200).send("Login successful");
      } else {
        // Invalid password
        res.status(401).send("Invalid email or password");
      }
    });
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
