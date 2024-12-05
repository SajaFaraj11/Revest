import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
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
    private orderService: OrderService,
    private messageService: MessageService,
    private router: Router
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

  }

  onSubmit() {
    if (this.checkoutForm.valid) {
      const order = {
        customer: this.checkoutForm.value,
        items: this.cartItems,
        totalAmount: this.totalAmount
      };

      const orderDetails = {
        customerName: order.customer.name,
        customerEmail: order.customer.email,
        customerPhone: order.customer.phone,
        address: order.customer.address,
        status: "Pending",
        paymentMethod: order.customer.paymentMethod,
        paymentStatus: "Paid",
        totalAmount: order.totalAmount,
        products: order.items.map(item => ({
          productId: item.id,
          quantity: item.quantity
        }))
      };

      this.orderService.pushSalesOrder(orderDetails).subscribe(
        (response: any) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Order placed successfully!',
          });

          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 1000);

        },

        (error: any) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'There was an error placing your order.',
          });
        }
      );
    }
  }


}
