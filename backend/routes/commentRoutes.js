const express = require('express');
const auth    = require('../middleware/authMiddleware');
const ctrl    = require('../controllers/commentController');
const router  = express.Router({ mergeParams: true });

router.post('/', auth, ctrl.addComment);
router.get('/', ctrl.getComments);

module.exports = router;
