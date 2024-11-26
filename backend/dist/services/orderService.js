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
const orderModel_1 = __importDefault(require("../models/orderModel"));
const postgresAdapter_1 = require("../dal/adapters/postgresAdapter");
const repository_1 = require("../dal/repository/repository");
const orderRepository = new repository_1.Repository(postgresAdapter_1.postgresAdapter); // Pass the DB adapter
exports.OrderService = {
    getAllOrders(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const orders = yield orderRepository.getAll(orderModel_1.default);
                res.json(orders);
            }
            catch (err) {
                next(err);
            }
        });
    },
    createOrder(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { customerName, customerEmail, customerPhone, address, paymentMethod, totalAmount } = req.body;
                const newOrder = yield orderRepository.create(orderModel_1.default, {
                    customerName,
                    customerEmail,
                    customerPhone,
                    address,
                    paymentMethod,
                    totalAmount,
                });
                res.status(201).json(newOrder);
            }
            catch (err) {
                next(err);
            }
        });
    },
    updateOrder(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const updatedOrder = yield orderRepository.update(orderModel_1.default, Number(id), req.body);
                res.json(updatedOrder);
            }
            catch (err) {
                next(err);
            }
        });
    },
    deleteOrder(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield orderRepository.remove(orderModel_1.default, Number(id));
                res.status(204).send();
            }
            catch (err) {
                next(err);
            }
        });
    },
};
