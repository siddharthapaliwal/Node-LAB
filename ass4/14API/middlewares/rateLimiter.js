const rateLimit = require('express-rate-limit');

// Configure rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: {
    status: 429,
    error: 'Too many requests. Please try again later.',
  },
});

module.exports = limiter;
