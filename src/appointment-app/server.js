const express = require ("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_appointments", // Use your specific database name
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL");
});

// Route to handle appointment booking
app.post("/api/appointments", (req, res) => {
  const { name, age, contact, gender, doctor, date, time, comment } = req.body;
  console.log("Received data:", req.body); // Log incoming data

  const sql =
    "INSERT INTO appointments (name, age, contact, gender, doctor, date, time, comment) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(
    sql,
    [name, age, contact, gender, doctor, date, time, comment],
    (err, result) => {
      if (err) {
        console.error("Error inserting data:", err);
        return res.status(500).send("Failed to book appointment");
      }
      res.send("Appointment booked successfully!");
    }
  );
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
