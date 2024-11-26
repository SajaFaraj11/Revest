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
exports.ProductService = void 0;
const repository_1 = require("../dal/repository/repository");
const postgresAdapter_1 = require("../dal/adapters/postgresAdapter");
const productModel_1 = __importDefault(require("../models/productModel"));
const productRepository = new repository_1.Repository(postgresAdapter_1.postgresAdapter);
exports.ProductService = {
    getAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield productRepository.getAll(productModel_1.default);
            }
            catch (err) {
                throw err;
            }
        });
    },
    createProduct(productData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield productRepository.create(productModel_1.default, productData);
            }
            catch (err) {
                throw err;
            }
        });
    },
    updateProduct(productId, updateData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield productRepository.update(productModel_1.default, productId, updateData);
            }
            catch (err) {
                throw err;
            }
        });
    },
    deleteProduct(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield productRepository.remove(productModel_1.default, productId);
            }
            catch (err) {
                throw err;
            }
        });
    },
};
