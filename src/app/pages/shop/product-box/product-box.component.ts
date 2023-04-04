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
  @Input() product: Product | undefined;

  constructor() {}

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
