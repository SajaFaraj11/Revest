import axios from 'axios';
import { Op } from 'sequelize';
import Order from '../models/orderModel';

export const OrderService = {

  async pushSalesOrder(order: Order) {
    try {

      const response = await axios.post('https://third-party-api.com/salesOrder', order, {
        headers: { 'Content-Type': 'application/json' },
      });
      console.log('Order pushed successfully:', response.data);
    } catch (err) {
      console.error('Error pushing sales order');
      throw err;
    }
  },


  async getOrders(filters: any): Promise<any[]> {
    // to do : use repository
    try {
      const where: any = {};

      if (filters.name) {
        where.customerName = { [Op.like]: `%${filters.name}%` };
      }

      if (filters.email) {
        where.customerEmail = { [Op.like]: `%${filters.email}%` };
      }

      if (filters.mobileNumber) {
        where.customerMobileNumber = { [Op.like]: `%${filters.mobileNumber}%` };
      }

      if (filters.status) {
        where.status = filters.status;
      }

      if (filters.orderDate) {
        where.orderDate = { [Op.eq]: filters.orderDate };
      }

      const orders = await Order.findAll({
        where,
      });

      return orders;
    } catch (err) {
      throw err;
    }
  },



};
