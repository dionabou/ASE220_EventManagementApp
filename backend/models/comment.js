const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  user:    { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  event:   { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
  content: { type: String, required: true },
  rating:  { type: Number, min: 1, max: 5 }, 
}, { timestamps: true });

module.exports = mongoose.model('Comment', commentSchema);