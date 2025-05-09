const mongoose = require('mongoose');
const bcrypt   = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username:      { type: String, required: true, unique: true },
  email:         { type: String, required: true, unique: true },
  password:      { type: String, required: true },
  role:          { type: String, enum: ['organizer','attendee'], default: 'attendee' },
  createdEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }],
  registered:    [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }]
}, { timestamps: true });


userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model('User', userSchema);
