import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styles: [
  ]
})
export class ProductBoxComponent {
  @Output() addToCart = new EventEmitter();
  @Output() productDetail = new EventEmitter();
  @Input() product: Product | undefined;
  viewDetails = false;

  constructor() {}

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }

  onViewDetails(): void {
    this.productDetail.emit(this.product);
  }
}
