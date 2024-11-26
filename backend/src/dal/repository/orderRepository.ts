import { postgresAdapter } from '../adapters/postgresAdapter';
import { Repository } from './repository';

const orderRepository = new Repository(postgresAdapter);

export default orderRepository;