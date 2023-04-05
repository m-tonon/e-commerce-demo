import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, switchMap } from 'rxjs';
import { Product } from 'src/app/models/product.model';
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

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.getProducts();
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

  ngOnDestroy(): void {
    this.menProductsSubs?.unsubscribe();
    this.womenProductsSubs?.unsubscribe();
  }
}
