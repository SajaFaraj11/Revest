import { NextFunction, Request, Response } from 'express';
import { OrderService } from '../services/orderService';
 
export const OrderController = {

    async createSalesOrder(req: Request, res: Response): Promise<void> {
        const salesOrder = req.body;

        try {
            await OrderService.pushSalesOrder(salesOrder);
            res.status(200).json({ message: 'Sales order created and pushed successfully.' });
        } catch (error) {
            res.status(500).json({ message: 'Failed to push the sales order.', error });
        }
    },

    async getOrders(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
          const filters = req.query; 
          const orders = await OrderService.getOrders(filters);
          res.json(orders);  
        } catch (err) {
          next(err);
        }
      },
    
}
