import express from 'express';
const router = express.Router();
import { verifyToken } from '../middlewares/authMiddleware.js';
import Investment from '../controllers/investment.js';
const investment = new Investment();
router.use(verifyToken);

router.post('/add', investment.addInvestment);
router.post('/get', investment.getInvestment);
router.post('/detail', investment.getInvestmentDetail);

export default router;