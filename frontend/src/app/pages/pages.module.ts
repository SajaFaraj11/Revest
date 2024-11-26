import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {CarouselModule} from 'primeng/carousel';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductListComponent,
    CartComponent,
    ProductDetailsComponent
  ],
  imports: [
    CarouselModule,
    CommonModule,
    PagesRoutingModule
  ]  
})
export class PagesModule { }
