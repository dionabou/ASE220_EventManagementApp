const express           = require('express');
const auth              = require('../middleware/authMiddleware');
const requireRole       = require('../middleware/roleMiddleware');
const { getMe, getMyRegistrations, getMyCreates } = require('../controllers/userController');
const router            = express.Router();


router.get('/me', auth, getMe);

router.get('/registrations', auth, requireRole('attendee'), getMyRegistrations);


router.get('/created', auth, requireRole('organizer'), getMyCreates);

module.exports = router;
