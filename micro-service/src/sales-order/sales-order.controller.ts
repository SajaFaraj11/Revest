import { Controller, Get, Post, Body } from '@nestjs/common';
import { SalesOrderService } from './sales-order.service';
import { SalesOrder } from './sales-order.entity';
import { CreateSalesOrderDto } from './dto/sales-order.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('salesOrder')
export class SalesOrderController {
    constructor(private readonly salesOrderService: SalesOrderService) { }

    @Post()
    @ApiOperation({ summary: 'Create a new sales order' })
    @ApiResponse({ status: 201, description: 'The sales order has been created successfully.' })
    @ApiResponse({ status: 400, description: 'Invalid input data.' })
    async create(@Body() createSalesOrderDto: CreateSalesOrderDto) {
        return await this.salesOrderService.createSalesOrder(createSalesOrderDto);
    }

    @Get()
    async getAllSalesOrders(): Promise<SalesOrder[]> {
        return this.salesOrderService.getAllSalesOrders();
    }

}
