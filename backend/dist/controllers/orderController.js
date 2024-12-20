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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const orderService_1 = require("../services/orderService");
exports.OrderController = {
    createSalesOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const salesOrder = req.body;
            try {
                yield orderService_1.OrderService.pushSalesOrder(salesOrder);
                res.status(200).json({ message: 'Sales order created and pushed successfully.' });
            }
            catch (error) {
                res.status(500).json({ message: 'Failed to push the sales order.', error });
            }
        });
    },
    getOrders(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const filters = req.query;
                const orders = yield orderService_1.OrderService.getOrders(filters);
                res.json(orders);
            }
            catch (err) {
                next(err);
            }
        });
    },
};
