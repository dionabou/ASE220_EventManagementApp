const express     = require('express');
const auth        = require('../middleware/authMiddleware');
const requireRole = require('../middleware/roleMiddleware');
const ctrl        = require('../controllers/eventController');
const router      = express.Router();

router.get('/', ctrl.getAllEvents);

router.post('/',      auth, requireRole('organizer'), ctrl.createEvent);
router.get('/mine',   auth, requireRole('organizer'), ctrl.getMyEvents);
router.put('/:id',     auth, requireRole('organizer'), ctrl.updateEvent);
router.delete('/:id',  auth, requireRole('organizer'), ctrl.deleteEvent);

router.post('/:id/register', auth, requireRole('attendee'), ctrl.registerEvent);

module.exports = router;
