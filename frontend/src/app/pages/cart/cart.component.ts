import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems = [
    { id: 1, name: 'Product 1', price: 100, quantity: 2 },
    { id: 2, name: 'Product 2', price: 200, quantity: 1 },
  ];

  constructor(public cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart() {
    this.cartItems = this.cartService.getCartItems();
  }

  getTotalCost(): number {
    return this.cartService.getTotalCost();

  }

  removeItem(id: any) {
    this.cartService.removeFromCart(id);
    this.cartItems = this.cartService.getCartItems();
  }


  navigateToCheckout() {
    this.router.navigate(['/pages/checkout']);
  }
}
