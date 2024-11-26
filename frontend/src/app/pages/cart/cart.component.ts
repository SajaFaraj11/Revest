import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
