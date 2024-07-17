import express from 'express';
const router = express.Router();
import { Auth } from '../controllers/agentController.js';
const auth = new Auth();

router.post('/agent-register', auth.register);
router.post('/agent-login', auth.login);

export default router;
