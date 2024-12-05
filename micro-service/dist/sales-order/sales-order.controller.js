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
exports.SalesOrderController = void 0;
const common_1 = require("@nestjs/common");
const sales_order_service_1 = require("./sales-order.service");
const sales_order_dto_1 = require("./dto/sales-order.dto");
const swagger_1 = require("@nestjs/swagger");
let SalesOrderController = class SalesOrderController {
    constructor(salesOrderService) {
        this.salesOrderService = salesOrderService;
    }
    async create(createSalesOrderDto) {
        return await this.salesOrderService.createSalesOrder(createSalesOrderDto);
    }
    async getAllSalesOrders() {
        return this.salesOrderService.getAllSalesOrders();
    }
};
exports.SalesOrderController = SalesOrderController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new sales order' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The sales order has been created successfully.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input data.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sales_order_dto_1.CreateSalesOrderDto]),
    __metadata("design:returntype", Promise)
], SalesOrderController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SalesOrderController.prototype, "getAllSalesOrders", null);
exports.SalesOrderController = SalesOrderController = __decorate([
    (0, common_1.Controller)('salesOrder'),
    __metadata("design:paramtypes", [sales_order_service_1.SalesOrderService])
], SalesOrderController);
//# sourceMappingURL=sales-order.controller.js.map