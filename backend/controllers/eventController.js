const Event = require('../models/Event');
const User  = require('../models/User');

exports.createEvent = async (req, res) => {
  try {
    const ev = new Event({ ...req.body, organizer: req.user.id });
    await ev.save();
   
    await User.findByIdAndUpdate(req.user.id, { $push: { createdEvents: ev._id } });
    res.status(201).json(ev);
  } catch (err) {
    res.status(500).json({ message: 'Create event failed', error: err.message });
  }
};


exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find().populate('organizer', 'username email');
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: 'Fetch events failed', error: err.message });
  }
};


exports.getMyEvents = async (req, res) => {
  try {
    const events = await Event.find({ organizer: req.user.id });
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: 'Fetch my events failed', error: err.message });
  }
};


exports.updateEvent = async (req, res) => {
  try {
    const ev = await Event.findOneAndUpdate(
      { _id: req.params.id, organizer: req.user.id },
      req.body,
      { new: true }
    );
    if (!ev) return res.status(404).json({ message: 'Event not found or unauthorized' });
    res.json(ev);
  } catch (err) {
    res.status(500).json({ message: 'Update event failed', error: err.message });
  }
};


exports.deleteEvent = async (req, res) => {
  try {
    const ev = await Event.findOneAndDelete({ _id: req.params.id, organizer: req.user.id });
    if (!ev) return res.status(404).json({ message: 'Event not found or unauthorized' });
   
    await User.findByIdAndUpdate(req.user.id, { $pull: { createdEvents: ev._id } });
    res.json({ message: 'Event deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Delete event failed', error: err.message });
  }
};


exports.registerEvent = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const eid  = req.params.id;
    if (!user.registered.includes(eid)) {
      user.registered.push(eid);
      await user.save();
    }
    res.json({ registered: user.registered });
  } catch (err) {
    res.status(500).json({ message: 'Register event failed', error: err.message });
  }
};
