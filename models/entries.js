const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema({
  artist: { type: String, required: true },
  album: { type: String, required: true },
  img: { type: String },
  year: { type: Number },
  user: { type: String },
  comments: { type: String, required: true },
  date: { type: Date },
});

const Entry = mongoose.model("Entry", entrySchema);

module.exports = Entry;
