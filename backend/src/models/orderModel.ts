import { DataTypes, Model, Sequelize } from 'sequelize';
import Product from './productModel';
  
export default class Order extends Model {
  public id!: number;
  public customerName!: string;
  public customerEmail!: string;
  public customerPhone!: string;
  public address!: string;
  public status!: 'Pending' | 'Processing' | 'Completed' | 'Cancelled';
  public paymentMethod!: 'Cash' | 'Credit Card' | 'PayPal';
  public paymentStatus!: 'Unpaid' | 'Paid' | 'Refunded';
  public totalAmount!: number;
  public createdAt!: Date;
  public updatedAt!: Date;
  products: any;
}

export const initOrderModel = (sequelize: Sequelize) => {
  Order.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      customerName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      customerEmail: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      customerPhone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM('Pending', 'Processing', 'Completed', 'Cancelled'),
        defaultValue: 'Pending',
        allowNull: false,
      },
      paymentMethod: {
        type: DataTypes.ENUM('Cash', 'Credit Card', 'PayPal'),
        allowNull: false,
      },
      paymentStatus: {
        type: DataTypes.ENUM('Unpaid', 'Paid', 'Refunded'),
        defaultValue: 'Unpaid',
        allowNull: false,
      },
      totalAmount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'orders',
      timestamps: true,  
    }
  );

   Order.belongsToMany(Product, { through: 'OrderProducts' });
};
