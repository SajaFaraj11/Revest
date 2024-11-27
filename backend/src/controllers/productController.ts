import { Request, Response, NextFunction } from 'express';
import { ProductService } from '../services/productService';

export const ProductController = {

    async createProductExternal(req: Request, res: Response, next: NextFunction) {
        try {
            const productData = req.body;
            const newProduct = await ProductService.createProduct(productData);
            res.status(201).json(newProduct);
        } catch (err) {
            next(err);
        }
    },

    async createProductInternal(req: Request, res: Response, next: NextFunction) {
        try {
            const productData = req.body;
            const newProduct = await ProductService.createProduct(productData);
            res.status(201).json(newProduct);
        } catch (err) {
            next(err);
        }
    },

    async getAllProducts(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const products = await ProductService.getAllProducts();
            res.json(products);
        } catch (err) {
            next(err);
        }
    },

    async updateProduct(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const productId = Number(req.params.id);
            const updateData = req.body;
            const updatedProduct = await ProductService.updateProduct(productId, updateData);
            res.json(updatedProduct);
        } catch (err) {
            next(err);
        }
    },

    async deleteProduct(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const productId = Number(req.params.id);
            await ProductService.deleteProduct(productId);
            res.status(204).send();
        } catch (err) {
            next(err);
        }
    },
};
