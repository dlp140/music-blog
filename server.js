// Dependencies
const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const session = require("express-session");

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

// Middleware
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use("/public", express.static("public"));

// Routes / Controllers
const entriesController = require("./controllers/entries");
app.use("/entries", entriesController);

const userController = require("./controllers/users");
app.use("/users", userController);

const sessionsController = require("./controllers/sessions");
app.use("/sessions", sessionsController);

app.get("/", (req, res) => {
  res.render("index.ejs", {
    currentUser: req.session.currentUser,
  });
});

// Listener
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`The server is listening on port: ${PORT}`));
