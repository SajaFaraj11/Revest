import express from 'express';
import { OrderController } from '../controllers/orderController';

const router = express.Router();

router.post('/salesOrder', OrderController.createSalesOrder);
router.get('/', OrderController.getOrders);

export default router;
