import { DataTypes, Model, Sequelize } from 'sequelize';

export default class Product extends Model {
  public id!: number;
  public name!: string;
  public description!: string;
  public price!: number;
  public discount!: number | null;
  public stock!: number; // Available inventory
  public category!: string; 
  public brandName!: string;
  public imageUrl!: string; // Link to product image
  public weight!: number | null; // Weight in kg or grams
  public isActive!: boolean; // Whether the product is active or not
  public createdAt!: Date;
  public updatedAt!: Date;
}

export const initProductModel = (sequelize: Sequelize) => {
  Product.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      discount: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      brandName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      weight: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'products',
      timestamps: true,
    }
  );
};
