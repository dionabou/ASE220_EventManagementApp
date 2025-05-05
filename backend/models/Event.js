const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name:        { type: String, required: true },
  type:        { type: String },
  date:        { type: Date },
  location:    { type: String },
  capacity:    { type: Number },
  price:       { type: Number },
  image:       { type: String },
  description: { type: String },
  organizer:   { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);
