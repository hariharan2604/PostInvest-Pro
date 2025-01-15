import express from 'express';
import { verifyAccessToken } from '../middlewares/authMiddleware.js';
import Customer from '../controllers/customer.js';
const customerController = new Customer();
const router = express.Router();

router.use(verifyAccessToken);

router.post('/create', customerController.createCustomer);
router.post('/update', customerController.updateCustomer);
router.post('/add-relation', customerController.addRelation);
router.post('/list', customerController.getCustomers);
router.post('/detail', customerController.getCustomerDetails);

export default router;
