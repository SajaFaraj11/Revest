import express from 'express';
import { ProductController } from '../controllers/productController';
import authenticateJWT from '../middleware/authenticateJWT';

const router = express.Router();

router.post('/create/external', authenticateJWT, ProductController.createProductExternal);
router.post('/create/internal', ProductController.createProductInternal);

router.get('/', ProductController.getAllProducts);
router.put('/:id', ProductController.updateProduct);
router.delete('/:id', ProductController.deleteProduct);

export default router;
