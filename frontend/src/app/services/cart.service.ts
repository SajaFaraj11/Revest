import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class CartService {
  private cart: any[] = [];
  constructor() {
    this.saveToCart();
  }

  saveToCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cart = JSON.parse(savedCart);
    }
  }
  getTotalCost(): number {
    return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  addToCart(product: any) {
    const existingProduct = this.cart.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
    this.saveCart();
  }

  removeFromCart(productId: number) {
    const item = this.cart.find(item => item.id === productId);
    if (item) {
      if (item.quantity > 1) {
        item.quantity -= 1;
        this.updateCartItem(item);
      } else {
        this.cart = this.cart.filter(item => item.id !== productId);
      }
    }
    this.saveCart();
  }

  updateCartItem(item: any) {
    const index = this.cart.findIndex(cartItem => cartItem.id === item.id);
    if (index !== -1) {
      this.cart[index] = item;
      this.saveCart();
    }
  }


  getCartItems() {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
  }

  private saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
}
