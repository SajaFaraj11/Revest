"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const orderService_1 = require("../services/orderService");
const router = express_1.default.Router();
router.get('/', orderService_1.OrderService.getAllOrders);
router.post('/', orderService_1.OrderService.createOrder);
router.put('/:id', orderService_1.OrderService.updateOrder);
router.delete('/:id', orderService_1.OrderService.deleteOrder);
exports.default = router;
