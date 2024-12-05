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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSalesOrderDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateSalesOrderDto {
}
exports.CreateSalesOrderDto = CreateSalesOrderDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Customer name', example: 'John Doe' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSalesOrderDto.prototype, "customerName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Customer email address', example: 'john@example.com' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateSalesOrderDto.prototype, "customerEmail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Customer phone number', example: '+1234567890' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSalesOrderDto.prototype, "customerPhone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Customer address', example: '123 Elm Street' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSalesOrderDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Order status',
        enum: ['Pending', 'Processing', 'Completed', 'Cancelled'],
        example: 'Pending',
    }),
    (0, class_validator_1.IsEnum)(['Pending', 'Processing', 'Completed', 'Cancelled']),
    __metadata("design:type", String)
], CreateSalesOrderDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Payment method',
        enum: ['Cash', 'Credit Card', 'PayPal'],
        example: 'Credit Card',
    }),
    (0, class_validator_1.IsEnum)(['Cash', 'Credit Card', 'PayPal']),
    __metadata("design:type", String)
], CreateSalesOrderDto.prototype, "paymentMethod", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Payment status',
        enum: ['Unpaid', 'Paid', 'Refunded'],
        example: 'Paid',
    }),
    (0, class_validator_1.IsEnum)(['Unpaid', 'Paid', 'Refunded']),
    __metadata("design:type", String)
], CreateSalesOrderDto.prototype, "paymentStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total amount', example: 99.99 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateSalesOrderDto.prototype, "totalAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Products in the order', type: Array, example: [{ productId: 1, quantity: 2 }] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayNotEmpty)(),
    __metadata("design:type", Array)
], CreateSalesOrderDto.prototype, "products", void 0);
//# sourceMappingURL=sales-order.dto.js.map