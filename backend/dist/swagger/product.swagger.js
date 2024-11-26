"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productService_1 = require("../services/productService");
const productController_1 = require("../controllers/productController");
const router = express_1.default.Router();
/**
 * @swagger
 * tags:
 *   - name: Products
 *     description: Operations related to products
 */
/**
 * @swagger
 * /create/internal:
 *   post:
 *     tags:
 *       - Products
 *     description: Creates a product internally (no authentication required)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Product created successfully
 *       400:
 *         description: Bad request
 */
router.post('/create/internal', productController_1.ProductController.createProductInternal);
/**
 * @swagger
 * /:
 *   get:
 *     tags:
 *       - Products
 *     description: Retrieves all products
 *     responses:
 *       200:
 *         description: List of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   price:
 *                     type: number
 *                   description:
 *                     type: string
 */
router.get('/', productService_1.ProductService.getAllProducts);
/**
 * @swagger
 * /:
 *   post:
 *     tags:
 *       - Products
 *     description: Creates a new product
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Product created successfully
 *       400:
 *         description: Bad request
 */
router.post('/', productService_1.ProductService.createProduct);
/**
 * @swagger
 * /{id}:
 *   put:
 *     tags:
 *       - Products
 *     description: Updates an existing product by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the product to update
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Product updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Product not found
 */
router.put('/:id', productService_1.ProductService.updateProduct);
/**
 * @swagger
 * /{id}:
 *   delete:
 *     tags:
 *       - Products
 *     description: Deletes a product by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the product to delete
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Product deleted successfully
 *       404:
 *         description: Product not found
 */
router.delete('/:id', productService_1.ProductService.deleteProduct);
