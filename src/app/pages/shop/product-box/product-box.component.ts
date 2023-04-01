import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styles: [
  ]
})
export class ProductBoxComponent {
  @Output() addToCart = new EventEmitter();

  product: Product | undefined = {
    id: 1,
    title: 'Womens Skirt',
    price: 99.99,
    category: 'For Women',
    description: 'Description',
    image: '../../../../../assets/images/products/women/product4.jpg'
  };

  constructor() {}

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
