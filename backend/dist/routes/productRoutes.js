"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productService_1 = require("../services/productService");
const productController_1 = require("../controllers/productController");
const authenticateJWT_1 = __importDefault(require("../middleware/authenticateJWT"));
const router = express_1.default.Router();
router.post('/create/external', authenticateJWT_1.default, productController_1.ProductController.createProductExternal);
router.post('/create/internal', productController_1.ProductController.createProductInternal);
router.get('/', productService_1.ProductService.getAllProducts);
router.post('/', productService_1.ProductService.createProduct);
router.put('/:id', productService_1.ProductService.updateProduct);
router.delete('/:id', productService_1.ProductService.deleteProduct);
exports.default = router;
