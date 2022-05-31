// Require Dependencies
const express = require("express");
const Entry = require("../models/entries");

// Initialize Router Object
const router = express.Router();

// Routes / Controllers

router.get("/", (req, res) => {
  Entry.find({}, (error, allEntries) => {
    res.render("entries/index.ejs", {
      entries: allEntries,
    });
  });
});

// I

// N
router.get("/new", (req, res) => {
  res.render("entries/new.ejs");
});

// D

// U

// C
router.post("/", (req, res) => {
  Entry.create(req.body, (err, createdEntry) => {
    res.redirect("/entries");
  });
});

// E

// S
router.get("/", (req, res) => {
  Entry.find({}, (err, Entries) => {
    res.render("entries/index.ejs", {
      entries: foundEntries,
    });
  });
});

module.exports = router;
