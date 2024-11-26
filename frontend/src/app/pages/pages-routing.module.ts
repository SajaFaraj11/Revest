import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
   // pathMatch: 'full',
  },
     { path: 'products', component: ProductListComponent },
    { path: 'product/:id', component: ProductListComponent },
    { path: 'cart', component: CartComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
 })
export class PagesRoutingModule { }
