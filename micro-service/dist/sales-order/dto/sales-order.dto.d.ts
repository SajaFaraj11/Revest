export declare class CreateSalesOrderDto {
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    address: string;
    status: 'Pending' | 'Processing' | 'Completed' | 'Cancelled';
    paymentMethod: 'Cash' | 'Credit Card' | 'PayPal';
    paymentStatus: 'Unpaid' | 'Paid' | 'Refunded';
    totalAmount: number;
    products: any[];
}
