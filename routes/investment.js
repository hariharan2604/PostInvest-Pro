import express from 'express';
const router = express.Router();
import { verifyAccessToken } from '../middlewares/authMiddleware.js';
import Investment from '../controllers/investment.js';
const investmentController = new Investment();

router.use(verifyAccessToken);

router.get('/schemes', investmentController.getSchemes);
router.post('/add', investmentController.addInvestment);
router.post('/get', investmentController.getInvestment);
router.post('/detail', investmentController.getInvestmentDetail);

export default router;