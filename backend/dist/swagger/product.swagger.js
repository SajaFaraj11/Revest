"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
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
 * /api/products/create/internal:
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
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               discount:
 *                 type: number
 *                 nullable: true
 *               stock:
 *                 type: number
 *               category:
 *                 type: string
 *               brandName:
 *                 type: string
 *               imageUrl:
 *                 type: string
 *               weight:
 *                 type: number
 *                 nullable: true
 *               isActive:
 *                 type: boolean
 *             required:
 *               - name
 *               - price
 *               - stock
 *               - category
 *               - brandName
 *               - imageUrl
 *               - isActive
 *     responses:
 *       201:
 *         description: Product created successfully
 *       400:
 *         description: Bad request
 */
router.post('/api/products/create/internal', productController_1.ProductController.createProductInternal);
/**
 * @swagger
 * /api/products:
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
 *                   description:
 *                     type: string
 *                   price:
 *                     type: number
 *                   discount:
 *                     type: number
 *                     nullable: true
 *                   stock:
 *                     type: integer
 *                   category:
 *                     type: string
 *                   brandName:
 *                     type: string
 *                   imageUrl:
 *                     type: string
 *                   weight:
 *                     type: number
 *                     nullable: true
 *                   isActive:
 *                     type: boolean
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 */
router.get('/api/products/', productController_1.ProductController.getAllProducts);
/**
 * @swagger
 * /api/products/{id}:
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
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               discount:
 *                 type: number
 *                 nullable: true
 *               stock:
 *                 type: number
 *               category:
 *                 type: string
 *               brandName:
 *                 type: string
 *               imageUrl:
 *                 type: string
 *               weight:
 *                 type: number
 *                 nullable: true
 *               isActive:
 *                 type: boolean
 *             required:
 *               - name
 *               - price
 *               - stock
 *               - category
 *               - brandName
 *               - imageUrl
 *               - isActive
 *     responses:
 *       200:
 *         description: Product updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Product not found
 */
router.put('/api/products/:id', productController_1.ProductController.updateProduct);
/**
 * @swagger
 * /api/products/{id}:
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
router.delete('/api/products/:id', productController_1.ProductController.deleteProduct);
