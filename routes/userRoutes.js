const express = require('express');
const {
    registerUser,
    getUserProfile,
} = require('../controllers/userController');
const protect = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', registerUser);
router.route('/profile')
    .get(protect, getUserProfile)

module.exports = router;