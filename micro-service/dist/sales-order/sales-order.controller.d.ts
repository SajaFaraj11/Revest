import { SalesOrderService } from './sales-order.service';
import { SalesOrder } from './sales-order.entity';
import { CreateSalesOrderDto } from './dto/sales-order.dto';
export declare class SalesOrderController {
    private readonly salesOrderService;
    constructor(salesOrderService: SalesOrderService);
    create(createSalesOrderDto: CreateSalesOrderDto): Promise<SalesOrder>;
    getAllSalesOrders(): Promise<SalesOrder[]>;
}
