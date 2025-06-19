
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Ensure JWT_SECRET is defined
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  console.error('❌ JWT_SECRET is not defined in environment variables');
  process.exit(1);
}

// Environment check for logging
const isProduction = process.env.NODE_ENV === 'production';

/**
 * Middleware to authenticate JWT token from Authorization header
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
function authenticateToken(req, res, next) {
  // Extract Authorization header
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    !isProduction && console.error(`❌ No Authorization header - Path: ${req.path}`);
    return res.status(401).json({
      error: 'Unauthorized',
      message: 'Authorization header missing',
    });
  }

  // Validate header format: "Bearer <token>"
  if (!authHeader.startsWith('Bearer ')) {
    !isProduction && console.error(`❌ Invalid Authorization header format - Path: ${req.path}`);
    return res.status(401).json({
      error: 'Unauthorized',
      message: 'Invalid Authorization header format. Use Bearer <token>',
    });
  }

  // Extract token
  const token = authHeader.split(' ')[1];
  if (!token) {
    !isProduction && console.error(`❌ Token missing in Authorization header - Path: ${req.path}`);
    return res.status(401).json({
      error: 'Unauthorized',
      message: 'Access token missing',
    });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Attach decoded payload (e.g., email, id) to request
    !isProduction && console.log(`✅ Token verified for user: ${decoded.email || decoded.id} - Path: ${req.path}`);
    next();
  } catch (err) {
    !isProduction && console.error(`❌ Token verification failed - Path: ${req.path} - Error: ${err.message}`);
    if (err.name === 'TokenExpiredError') {
      return res.status(403).json({
        error: 'Forbidden',
        message: 'Token expired',
      });
    }
    return res.status(403).json({
      error: 'Forbidden',
      message: 'Invalid token',
    });
  }
}

module.exports = authenticateToken;