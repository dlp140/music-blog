// Dependencies
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

// Database Connection
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Database Connection Error/Success
const db = mongoose.connection;
db.on("error", (err) => console.log(`{$err.message} is mongo not running?`));
db.on("connected", () => console.log(`mongo connected`));
db.on("disconnected", () => console.log(`mongo disconnected`));

// Listener
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`The server is listening on port: ${PORT}`));
