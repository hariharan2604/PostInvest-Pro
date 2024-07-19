import express from 'express';
import { verifyToken } from '../middlewares/authMiddleware.js';
import Customer from '../controllers/customer.js';

const customer = new Customer();
const router = express.Router();

router.use(verifyToken);

router.post('/create', customer.createCustomer);
router.post('/update', customer.updateCustomer);
router.post('/all', customer.getCustomers);
router.post('/detail', customer.getCustomerDetails);

export default router;
