const mongoose = require('mongoose');

const MongoDb = async () => {
    try {
        const conn = await mongoose.connect("mongodb://localhost:27017/Doctors_db");
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

module.exports = MongoDb;