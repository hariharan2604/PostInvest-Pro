import express from 'express';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.use(verifyToken);
router.get('/test', function (req, res, next) {
  res.send('respond with a resource');
});

export default router;
