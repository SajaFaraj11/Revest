import { Repository } from '../dal/repository/repository';
import { postgresAdapter } from '../dal/adapters/postgresAdapter';
import Product from '../models/productModel';

const productRepository = new Repository(postgresAdapter);

export const ProductService: any = {
  async getAllProducts() {
    try {
      return await productRepository.getAll(Product);
    } catch (err) {
      throw err;
    }
  },
  async createProduct(productData: Partial<Product>): Promise<any> {
    try {
      return await productRepository.create(Product, productData);
    } catch (err) {
      throw err;
    }
  },

  async updateProduct(productId: number, updateData: Partial<Product>): Promise<any> {
    try {
      return await productRepository.update(Product, productId, updateData);
    } catch (err) {
      throw err;
    }
  },

  async deleteProduct(productId: number): Promise<void> {
    try {
      await productRepository.remove(Product, productId);
    } catch (err) {
      throw err;
    }
  },
};
