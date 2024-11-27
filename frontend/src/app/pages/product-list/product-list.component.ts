import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productId: number;
  product: any;
  products: any[] = [];
  cart: any[] = [];
  allProducts: any[] = [];
  showAll: boolean = false;

  constructor(private route: ActivatedRoute,
    private productsService: ProductService,
    private cartService: CartService,
    private messageService: MessageService
  ) {
    this.productId = this.route.snapshot.params['id'];
    this.product = this.products.find(p => p.id === +this.productId);
  }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    this.productsService.getAllProducts().subscribe(
      (data) => {
        this.allProducts = data;
        this.products = data.slice(0, 4);
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  loadMoreProducts() {
    this.showAll = true;
    this.products = this.allProducts;
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    this.messageService.add({
      severity: 'success',
      summary: 'Added to Cart',
      detail: `${product.name} has been added to your cart.`,
    });
  }
}
