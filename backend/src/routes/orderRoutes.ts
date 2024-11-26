import express from 'express';
import { OrderController } from '../controllers/orderController';

const router = express.Router();

router.post('/salesOrder', OrderController.createSalesOrder);

export default router;
