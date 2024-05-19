// File.js
const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  filename: { type: String, required: true },
  path: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('File', FileSchema);
