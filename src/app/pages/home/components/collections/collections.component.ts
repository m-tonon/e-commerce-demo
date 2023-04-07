import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styles: [
  ]
})

export class CollectionsComponent implements OnInit, OnDestroy {
  menProducts?: Array<Product>;
  womenProducts?: Array<Product>;
  menProductsSubs?: Subscription;
  womenProductsSubs?: Subscription;
  collection?: string;
  productDetail?: Product;
  viewDetails: boolean = false;

  constructor(
    private storeService: StoreService,
    private cartService: CartService,
    private router: Router) {}

  ngOnInit(): void {
    this.getProducts();
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

  onViewDetails(product: Product): void {
    this.productDetail = product;
    this.viewDetails = true;
    console.log(this.viewDetails);
  }

  onCloseViewDetails(viewDetails: boolean): void {
    this.viewDetails = viewDetails;
  }

  getProducts(): void {
      this.menProductsSubs = this.storeService.getAllProducts('3','desc', 'men\'s clothing').
      subscribe((_product) => {
        this.menProducts = _product;
      });

    this.womenProductsSubs = this.storeService.getAllProducts('3','desc', 'women\'s clothing').
      subscribe((_product) => {
        this.womenProducts = _product;
      });
  }

  toCollection(_collection: string): void {
    this.router.navigate(['/shop'], { queryParams: {collection: _collection}});
  }

  ngOnDestroy(): void {
    this.menProductsSubs?.unsubscribe();
    this.womenProductsSubs?.unsubscribe();
  }
}
