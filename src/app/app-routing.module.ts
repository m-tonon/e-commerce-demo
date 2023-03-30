import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';

const routes: Routes = [{
  path:'home',
  component: HomeComponent
},
{
  path: '', redirectTo: 'home', pathMatch: 'full'
},
{
  path: 'shop', component: ShopComponent
},
{
  path: 'cart', component: CartComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
