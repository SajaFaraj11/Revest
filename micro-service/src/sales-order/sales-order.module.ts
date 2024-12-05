import { Module } from '@nestjs/common';
import { SalesOrderController } from './sales-order.controller';
import { SalesOrderService } from './sales-order.service';
import { DatabaseModule } from '../db/db.module';

@Module({
    imports: [DatabaseModule],
    controllers: [SalesOrderController],
    providers: [SalesOrderService],
})
export class SalesOrderModule { }
