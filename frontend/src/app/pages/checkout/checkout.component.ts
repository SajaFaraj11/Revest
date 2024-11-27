import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  checkoutForm!: FormGroup;
  cartItems: any[] = [];
  totalAmount: number = 0;
  paymentMethods: any[] = [];

  constructor(
    private fb: FormBuilder,
    private cartService: CartService,
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.totalAmount = this.cartService.getTotalCost();
    this.createForm();
  }

  createForm() {
    this.checkoutForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      paymentMethod: ['', Validators.required]
    });

    this.paymentMethods = [
      { name: 'Credit Card' },
      { name: 'PayPal' },
      { name: 'Cash on Delivery' }
    ];

    // this.paymentMethods = [
    //   { name: 'Credit Card', id: 1 },
    //   { name: 'PayPal', id: 2 },
    //   { name: 'Cash on Delivery', id: 2 }
    // ];
  }

  onSubmit() {
    if (this.checkoutForm.valid) {
      const orderDetails = {
        customer: this.checkoutForm.value,
        items: this.cartItems,
        totalAmount: this.totalAmount
      };

      this.orderService.pushSalesOrder(orderDetails).subscribe(
        (response: any) => {
          console.log('Order placed successfully:', response);
        },
        (error: any) => {
          console.error('Error placing order:', error);
        }
      );
    }
  }


}
