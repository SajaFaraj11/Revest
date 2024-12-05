import { Injectable, Inject } from '@nestjs/common';
import { SalesOrder } from './sales-order.entity';

@Injectable()
export class SalesOrderService {
    constructor(
        @Inject('SEQUELIZE') private readonly sequelizeInstance: any,
    ) { }

    async createSalesOrder(data: Partial<SalesOrder>): Promise<SalesOrder> {
        const salesOrderData: Partial<SalesOrder> = {
            customerName: data.customerName || 'Unknown',
            customerEmail: data.customerEmail,
            customerPhone: data.customerPhone,
            address: data.address,
            status: data.status || 'Pending',
            paymentMethod: data.paymentMethod,
            paymentStatus: data.paymentStatus || 'Unpaid',
            totalAmount: data.totalAmount,
            products: data.products,
        };

        return await SalesOrder.create(salesOrderData as SalesOrder);
    }

    async getAllSalesOrders(): Promise<SalesOrder[]> {
        return await SalesOrder.findAll();
    }
}
