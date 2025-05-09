const Comment = require('../models/Comment');

exports.addComment = async (req, res) => {
  try {
    const { content, rating } = req.body;
    const comment = new Comment({
      user: req.user.id,
      event: req.params.id,
      content,
      rating
    });
    await comment.save();
    res.status(201).json(await comment.populate('user','username'));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getComments = async (req, res) => {
  try {
    const comments = await Comment
      .find({ event: req.params.id })
      .sort('-createdAt')
      .populate('user','username');
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
