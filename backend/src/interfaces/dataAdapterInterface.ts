import { Model, ModelStatic } from 'sequelize';

export interface DBAdapter {
  getAll<T extends object>(model: ModelStatic<Model<T>>): Promise<Model<T>[]>;
  create<T extends object>(model: ModelStatic<Model<T>>, data: T): Promise<Model<T>>;
  update<T extends object>(model: ModelStatic<Model<T>>, id: number, data: Partial<T>): Promise<Model<T>>;
  remove<T extends object>(model: ModelStatic<Model<T>>, id: number): Promise<void>;
}
