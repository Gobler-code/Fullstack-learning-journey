const jwt  = require('jsonwebtoken');
const User = require('../models/user');

const protect = async (req, res, next) => {
  try {
    // 1. Pull the Authorization header: "Bearer eyJhbGci..."
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'No token provided' });
    }

    // 2. Split "Bearer eyJ..." → grab index [1]
    const token = authHeader.split(' ')[1];

    // 3. jwt.verify() does three things:
    //    - Decodes the token
    //    - Recreates the signature using JWT_SECRET
    //    - Throws an error if signatures don't match or token is expired
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 4. Attach the user to req — but exclude the password field
    // .select('-password') = "give me everything EXCEPT the password"
    req.user = await User.findById(decoded.id).select('-password');

    next(); // authenticated — proceed to the route handler
  } catch (error) {
    // jwt.verify throws JsonWebTokenError or TokenExpiredError
    res.status(401).json({ message: 'Token invalid or expired' });
  }
};

module.exports = protect;