import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

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

  onCloseDetail(): void {
    this.viewDetail = !this.viewDetail;
    this.closeDetail.emit(this.viewDetail);
    console.log(this.viewDetail);
  }
}
