const User = require('../models/User');

exports.getMe = async (req, res) => {
  try {
    const u = await User.findById(req.user.id).select('-password');
    res.json(u);
  } catch (err) {
    res.status(500).json({ message: 'Fetch profile failed', error: err.message });
  }
};

exports.getMyRegistrations = async (req, res) => {
  try {
    const u = await User.findById(req.user.id).populate('registered');
    res.json(u.registered);
  } catch (err) {
    res.status(500).json({ message: 'Fetch registrations failed', error: err.message });
  }
};

exports.getMyCreates = async (req, res) => {
  try {
    const u = await User.findById(req.user.id).populate('createdEvents');
    res.json(u.createdEvents);
  } catch (err) {
    res.status(500).json({ message: 'Fetch created events failed', error: err.message });
  }
};
