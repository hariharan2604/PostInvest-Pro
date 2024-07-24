import express from 'express';
import { verifyToken } from '../middlewares/authMiddleware.js';
import Receipt from '../controllers/receipt.js';

const router = express.Router();
const receipt = new Receipt();
router.use(verifyToken);

router.post('/add', receipt.addReceipt);
router.post('/get', receipt.getReceipt);

export default router;