import { Model, ModelStatic } from 'sequelize';
import { DBAdapter } from '../../interfaces/dataAdapterInterface';

type MakeNullishOptional<T> = {
  [P in keyof T]?: T[P] | null;
};

export const postgresAdapter: DBAdapter = {
  async getAll<T extends object>(model: ModelStatic<Model<T>>) {
    return await model.findAll();
  },

  async countRecords<T extends object>(model: ModelStatic<Model<T>>) {
    return await model.count();
  },

  async create<T extends object>(model: ModelStatic<Model<T>>, data: T) {
    return await model.create(data as any);
  },

  async update<T extends object>(model: ModelStatic<Model<T, T>>, id: number, data: MakeNullishOptional<T>) {
    const record = await model.findByPk(id);
    if (!record) throw new Error(`${model.name} not found`);
    return await record.update(data as any);
  },

  async remove<T extends object>(model: ModelStatic<Model<T>>, id: number) {
    const record = await model.findByPk(id);
    if (!record) throw new Error(`${model.name} not found`);
    await record.destroy();
  },



};
