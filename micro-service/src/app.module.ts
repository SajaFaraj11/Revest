import { Module } from '@nestjs/common';
import { SalesOrderModule } from './sales-order/sales-order.module';
import { DatabaseModule } from './db/db.module';

@Module({
    imports: [DatabaseModule, SalesOrderModule],
})
export class AppModule { }
