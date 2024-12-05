import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsEnum, IsNumber, IsArray, ArrayNotEmpty } from 'class-validator';

export class CreateSalesOrderDto {
  @ApiProperty({ description: 'Customer name', example: 'John Doe' })
  @IsString()
  customerName!: string;

  @ApiProperty({ description: 'Customer email address', example: 'john@example.com' })
  @IsEmail()
  customerEmail!: string;

  @ApiProperty({ description: 'Customer phone number', example: '+1234567890' })
  @IsString()
  customerPhone!: string;

  @ApiProperty({ description: 'Customer address', example: '123 Elm Street' })
  @IsString()
  address!: string;

  @ApiProperty({
    description: 'Order status',
    enum: ['Pending', 'Processing', 'Completed', 'Cancelled'],
    example: 'Pending',
  })
  @IsEnum(['Pending', 'Processing', 'Completed', 'Cancelled'])
  status!: 'Pending' | 'Processing' | 'Completed' | 'Cancelled';

  @ApiProperty({
    description: 'Payment method',
    enum: ['Cash', 'Credit Card', 'PayPal'],
    example: 'Credit Card',
  })
  @IsEnum(['Cash', 'Credit Card', 'PayPal'])
  paymentMethod!: 'Cash' | 'Credit Card' | 'PayPal';

  @ApiProperty({
    description: 'Payment status',
    enum: ['Unpaid', 'Paid', 'Refunded'],
    example: 'Paid',
  })
  @IsEnum(['Unpaid', 'Paid', 'Refunded'])
  paymentStatus!: 'Unpaid' | 'Paid' | 'Refunded';

  @ApiProperty({ description: 'Total amount', example: 99.99 })
  @IsNumber()
  totalAmount!: number;

  @ApiProperty({ description: 'Products in the order', type: Array, example: [{ productId: 1, quantity: 2 }] })
  @IsArray()
  @ArrayNotEmpty()
  products!: any[];
}
