import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styles: [
  ]
})
export class ShopComponent {
  isNavBarOpen = false;

  constructor (private cartService: CartService) {}

  openNavBar() {
    this.isNavBarOpen = true;
  }

  closeNavBar() {
    this.isNavBarOpen = false;
  }

  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id
    });
  }

}
