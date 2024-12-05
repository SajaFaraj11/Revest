import { SalesOrder } from './sales-order.entity';
export declare class SalesOrderService {
    private readonly sequelizeInstance;
    constructor(sequelizeInstance: any);
    createSalesOrder(data: Partial<SalesOrder>): Promise<SalesOrder>;
    getAllSalesOrders(): Promise<SalesOrder[]>;
}
