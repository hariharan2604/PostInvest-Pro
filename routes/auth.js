import express from 'express';
const router = express.Router();
import { Auth } from '../controllers/authController.js';
const auth = new Auth();

router.post('/register', auth.register);
router.post('/login', auth.login);

export default router;
