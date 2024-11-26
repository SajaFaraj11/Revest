import { Sequelize } from 'sequelize';
import { config } from '../config/config';

const sequelize = new Sequelize(
  config.db.postgres.database,
  config.db.postgres.user,
  config.db.postgres.password,
  {
    host: config.db.postgres.host,
    dialect: 'postgres',
  }
);

export default sequelize;
