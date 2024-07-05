import express from 'express';
import Agent from '../models/Agent.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { successResponse, errorResponse } from '../utilities/httpResponse.js';

const router = express.Router();

// User registration
router.post('/register', async (req, res) => {
  try {
    const { username, password, mobile, email, gender, dob, address, area, state, zip } = req.body;
    console.log('req.body :9', req.body);
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await Agent.create({
      username,
      password: hashedPassword,
      mobile,
      email,
      gender,
      dob: Date(dob), // Ensure dob is converted to Date object
      address,
      area,
      state,
      zip
    });
    res.status(201).json(successResponse({ message: 'User Registration successful' }));
  } catch (error) {
    console.log(error);
    res.status(500).json(errorResponse({ message: 'Registration failed', errmsg: error }));
  }
});

// User login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await Agent.findOne({ where: {username} });
    if (!user) {
      return res.json({ error: 'Authentication failed' });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json(errorResponse({ message: 'Authentication failed' }));
    }
    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: '1h',
    });
    res.status(200).json(successResponse({ token }));
  } catch (error) {
console.log('error :50', error);
    res.status(500).json(errorResponse({ message: 'Login failed' }));
  }
});

export default router;
