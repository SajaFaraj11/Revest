"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const axios_1 = __importDefault(require("axios"));
const sequelize_1 = require("sequelize");
exports.OrderService = {
    pushSalesOrder(order) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.post('http://localhost:3001/salesOrder', order, {
                    headers: { 'Content-Type': 'application/json' },
                });
                console.log('Order pushed successfully:', response.data);
            }
            catch (err) {
                console.error('Error pushing sales order:', err);
                throw err;
            }
        });
    },
    getOrders(filters) {
        return __awaiter(this, void 0, void 0, function* () {
            // to do : use repository
            try {
                const where = {};
                if (filters.name) {
                    where.customerName = { [sequelize_1.Op.like]: `%${filters.name}%` };
                }
                if (filters.email) {
                    where.customerEmail = { [sequelize_1.Op.like]: `%${filters.email}%` };
                }
                if (filters.mobileNumber) {
                    where.customerMobileNumber = { [sequelize_1.Op.like]: `%${filters.mobileNumber}%` };
                }
                if (filters.status) {
                    where.status = filters.status;
                }
                if (filters.orderDate) {
                    where.orderDate = { [sequelize_1.Op.eq]: filters.orderDate };
                }
                // const orders = await Order.findAll({
                //   where,
                // });
                const orders = [];
                return orders;
            }
            catch (err) {
                throw err;
            }
        });
    },
};
