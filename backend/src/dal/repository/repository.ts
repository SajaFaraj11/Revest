import { DBAdapter } from '../../interfaces/dataAdapterInterface';
import { ModelStatic, Model } from 'sequelize';
import Product from '../../models/productModel';
import { promises } from 'dns';

export class Repository<T extends object> {

  private dbAdapter: DBAdapter;

  constructor(dbAdapter: DBAdapter) {
    this.dbAdapter = dbAdapter;
  }

  async getAll(model: ModelStatic<Model<T>>): Promise<Model<T>[]> {
    return await this.dbAdapter.getAll(model);
  }

  async create(model: ModelStatic<Model<T>>, data: T): Promise<Model<T>> {
    return await this.dbAdapter.create(model, data);
  }

  async update(model: ModelStatic<Model<T>>, id: number, data: Partial<T>): Promise<Model<T>> {
    return await this.dbAdapter.update(model, id, data);
  }

  async remove(model: ModelStatic<Model<T>>, id: number): Promise<void> {
    await this.dbAdapter.remove(model, id);
  }

  async count(model: ModelStatic<Model<T>>): Promise<number> {
    return await this.dbAdapter.countRecords(model);
  }

}
