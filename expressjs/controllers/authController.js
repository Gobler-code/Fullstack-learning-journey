
const bcrypt = require('bcryptjs');
const jwt    = require('jsonwebtoken');
const User   = require('../models/user');

const signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // 1. Guard: does this email already exist?
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // 2. Hash the password — NEVER store plain text
    // 10 = salt rounds: how many times bcrypt re-hashes.
    // Higher = more secure but slower. 10 is the industry standard.
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3. Create the user in MongoDB
    const user = await User.create({ name, email, password: hashedPassword });

    // 4. Generate a JWT
    // jwt.sign(payload, secret, options) — payload is what you embed.
    // Only put the user's _id — don't put the password or sensitive data.
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // 1. Find by email
    const user = await User.findOne({ email });
    if (!user) {
      // Security: say "Invalid credentials" — never tell the attacker
      // whether the email or the password was wrong.
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // 2. bcrypt.compare re-hashes the entered password and compares.
    // You can NEVER reverse a bcrypt hash — this is the only way to check.
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // 3. Generate token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    res.json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = { signup, login };