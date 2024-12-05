import {
    Table,
    Column,
    Model,
    DataType,
    HasMany,
} from 'sequelize-typescript';

@Table({ tableName: 'sales_orders' })
export class SalesOrder extends Model<SalesOrder> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id!: number;

    @Column({ type: DataType.STRING, allowNull: false })
    customerName!: string;

    @Column({ type: DataType.STRING, allowNull: false })
    customerEmail!: string;

    @Column({ type: DataType.STRING, allowNull: false })
    customerPhone!: string;

    @Column({ type: DataType.STRING, allowNull: false })
    address!: string;

    @Column({
        type: DataType.ENUM('Pending', 'Processing', 'Completed', 'Cancelled'),
        allowNull: false,
    })
    status!: 'Pending' | 'Processing' | 'Completed' | 'Cancelled';

    @Column({
        type: DataType.ENUM('Cash', 'Credit Card', 'PayPal'),
        allowNull: false,
    })
    paymentMethod!: 'Cash' | 'Credit Card' | 'PayPal';

    @Column({
        type: DataType.ENUM('Unpaid', 'Paid', 'Refunded'),
        allowNull: false,
    })
    paymentStatus!: 'Unpaid' | 'Paid' | 'Refunded';

    @Column({ type: DataType.FLOAT, allowNull: false })
    totalAmount!: number;

    @Column({ type: DataType.JSONB, allowNull: true })
    products!: any; // Use JSONB for flexible product data
}
