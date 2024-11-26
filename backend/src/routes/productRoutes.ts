import express from 'express';
import { ProductService } from '../services/productService';
import { ProductController } from '../controllers/productController';
import authenticateJWT from '../middleware/authenticateJWT';

const router = express.Router();

router.post('/create/external', authenticateJWT, ProductController.createProductExternal);
router.post('/create/internal', ProductController.createProductInternal);
 
router.get('/', ProductService.getAllProducts);
router.post('/', ProductService.createProduct);
router.put('/:id', ProductService.updateProduct);
router.delete('/:id', ProductService.deleteProduct);

export default router;
