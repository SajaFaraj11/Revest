import Product from '../../models/productModel';
import { postgresAdapter } from '../adapters/postgresAdapter';
import { Repository } from './repository';

const productRepository = new Repository(postgresAdapter);

export default productRepository;