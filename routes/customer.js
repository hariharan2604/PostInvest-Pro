import express from 'express';
import { verifyToken } from '../middlewares/authMiddleware.js';
import Customer from '../controllers/customer.js';

const customer = new Customer();
const router = express.Router();

router.use(verifyToken);

router.post('/create', customer.createCustomer);
router.post('/update', customer.updateCustomer);
router.post('/add-relation', customer.addRelation);
router.post('/list', customer.getCustomers);
router.post('/detail', customer.getCustomerDetails);

export default router;
