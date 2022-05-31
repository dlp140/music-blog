// Require Dependencies
const express = require("express");
const Entry = require("../models/entries");

// Initialize Router Object
const router = express.Router();

// Routes / Controllers

// I
router.get("/", (req, res) => {
  Entry.find({}, (error, allEntries) => {
    res.render("entries/index.ejs", {
      entries: allEntries,
    });
  });
});

// N
router.get("/new", (req, res) => {
  res.render("entries/new.ejs");
});

// D
router.delete("/:id", (req, res) => {
  Entry.findByIdAndRemove(req.params.id, () => {
    res.redirect("/entries");
  });
});

// U
router.put("/:id", (req, res) => {
  Entry.findByIdAndUpdate(req.params.id, req.body, () => {
    res.redirect("/entries");
  });
});

// C
router.post("/", (req, res) => {
  Entry.create(req.body, (err, createdEntry) => {
    res.redirect("/entries");
  });
});

// E
router.get("/:id/edit", (req, res) => {
  Entry.findById(req.params.id, (err, foundEntry) => {
    res.render("entries/edit.ejs", {
      entry: foundEntry,
    });
  });
});

// S
router.get("/:id", (req, res) => {
  Entry.findById(req.params.id, (err, foundEntry) => {
    res.render("entries/show.ejs", {
      entry: foundEntry,
    });
  });
});

module.exports = router;
