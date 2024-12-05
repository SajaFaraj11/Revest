"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderService = void 0;
const common_1 = require("@nestjs/common");
const sales_order_entity_1 = require("./sales-order.entity");
let SalesOrderService = class SalesOrderService {
    constructor(sequelizeInstance) {
        this.sequelizeInstance = sequelizeInstance;
    }
    async createSalesOrder(data) {
        const salesOrderData = {
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
        return await sales_order_entity_1.SalesOrder.create(salesOrderData);
    }
    async getAllSalesOrders() {
        return await sales_order_entity_1.SalesOrder.findAll();
    }
};
exports.SalesOrderService = SalesOrderService;
exports.SalesOrderService = SalesOrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('SEQUELIZE')),
    __metadata("design:paramtypes", [Object])
], SalesOrderService);
//# sourceMappingURL=sales-order.service.js.map