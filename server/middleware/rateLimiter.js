const rateLimit = require("express-rate-limit");

exports.rateLimiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 24 hrs to milliseconds
  max: 200, // 200 requests limit
  message: "You have exceeded the 200 requests in 24 hrs limit!",
  standardHeaders: true,
  legacyHeaders: false,
});
