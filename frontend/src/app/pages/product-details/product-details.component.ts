import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  productId: number;
  product: any;
  products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
  ];
  constructor(private route: ActivatedRoute) {
    this.productId = this.route.snapshot.params['id'];
    this.product = this.products.find(p => p.id === +this.productId);
  }

  ngOnInit(): void {
  }

}
