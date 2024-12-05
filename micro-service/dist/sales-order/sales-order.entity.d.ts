import { Model } from 'sequelize-typescript';
export declare class SalesOrder extends Model<SalesOrder> {
    id: number;
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    address: string;
    status: 'Pending' | 'Processing' | 'Completed' | 'Cancelled';
    paymentMethod: 'Cash' | 'Credit Card' | 'PayPal';
    paymentStatus: 'Unpaid' | 'Paid' | 'Refunded';
    totalAmount: number;
    products: any;
}
