import express from 'express';
const router = express.Router();
import Auth from '../controllers/agent.js';
const auth = new Auth();

router.post('/agent-register', auth.register);
router.post('/agent-login', auth.login);

export default router;
