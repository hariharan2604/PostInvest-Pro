import express from 'express';
const router = express.Router();
import Auth from '../controllers/agent.js';
const authController = new Auth();

router.post('/agent-register', authController.register);
router.post('/agent-login', authController.login);
router.post('/refresh-token', authController.refreshAccessToken);
router.post('/logout', authController.logout);

export default router;
