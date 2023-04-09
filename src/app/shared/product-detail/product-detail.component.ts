import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styles: [
  ]
})
export class ProductDetailComponent {
  @Input() product?: Product;
  @Output() closeDetail = new EventEmitter();
  viewDetail: boolean = true;

  constructor(private cartService: CartService) {}

  onAddToCart(product: Product): void {
    const toCart = this.cartService.cartHelper(product);
    this.cartService.addToCart(toCart);

    console.log(product);
  }

  onCloseDetail(): void {
    this.viewDetail = false;
    this.closeDetail.emit(this.viewDetail);
    console.log(this.viewDetail);
  }
}
