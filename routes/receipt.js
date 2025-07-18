import express from 'express';
import { verifyAccessToken } from '../middlewares/authMiddleware.js';

import Receipt from '../controllers/receipt.js';

const router = express.Router();
const receiptController = new Receipt();

router.use(verifyAccessToken);

router.get('/banks', receiptController.getBanks);
// router.post('/add', receiptController.addReceipt);
router.post('/update', receiptController.updateReceipt);
router.post('/bulk-add', receiptController.addReceiptsBulk);
router.post('/get', receiptController.getReceipt);
router.post('/get/detail', receiptController.getReceiptDetail);

export default router;