const express = require('express');
const { register, login } = require('../controllers/authController');
const rateLimit = require('express-rate-limit');

const router = express.Router();

// Apply rate limiting to registration routes
const registerLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Increase the limit to 10 requests per windowMs for testing
  message: 'Too many registrations from this IP, please try again later.'
});

router.post('/register', registerLimiter, register);
router.post('/login', login);

module.exports = router;
