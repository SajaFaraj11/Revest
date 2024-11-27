"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productController_1 = require("../controllers/productController");
const authenticateJWT_1 = __importDefault(require("../middleware/authenticateJWT"));
const router = express_1.default.Router();
router.post('/create/external', authenticateJWT_1.default, productController_1.ProductController.createProductExternal);
router.post('/create/internal', productController_1.ProductController.createProductInternal);
router.get('/', productController_1.ProductController.getAllProducts);
router.put('/:id', productController_1.ProductController.updateProduct);
router.delete('/:id', productController_1.ProductController.deleteProduct);
exports.default = router;
