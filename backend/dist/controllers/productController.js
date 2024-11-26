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
exports.ProductController = void 0;
const productService_1 = require("../services/productService");
exports.ProductController = {
    createProductExternal(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productData = req.body;
                const newProduct = yield productService_1.ProductService.createProduct(productData);
                res.status(201).json(newProduct);
            }
            catch (err) {
                next(err);
            }
        });
    },
    createProductInternal(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productData = req.body;
                const newProduct = yield productService_1.ProductService.createProduct(productData);
                res.status(201).json(newProduct);
            }
            catch (err) {
                next(err);
            }
        });
    },
    getAllProducts(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield productService_1.ProductService.getAllProducts();
                res.json(products);
            }
            catch (err) {
                next(err);
            }
        });
    },
    updateProduct(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productId = Number(req.params.id);
                const updateData = req.body;
                const updatedProduct = yield productService_1.ProductService.updateProduct(productId, updateData);
                res.json(updatedProduct);
            }
            catch (err) {
                next(err);
            }
        });
    },
    deleteProduct(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productId = Number(req.params.id);
                yield productService_1.ProductService.deleteProduct(productId);
                res.status(204).send();
            }
            catch (err) {
                next(err); // Pass the error to the next middleware (error handler)
            }
        });
    },
};
