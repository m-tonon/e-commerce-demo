import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styles: [
  ]
})
export class ShopComponent implements OnInit, OnDestroy {
  isNavBarOpen = false;
  category: string | undefined;
  products: Array<Product> | undefined;
  productsSubs: Subscription | undefined;
  sort = 'desc';
  count = '12';

  constructor (
    private cartService: CartService,
    private storeService: StoreService,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.category = this.route.snapshot.queryParams['collection'];
    this.getProducts();
  }

  getProducts(): void {
    this.productsSubs = this.storeService.getAllProducts(this.count, this.sort, this.category).
      subscribe((_product) => {
        this.products = _product;
      })
  }

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

  onShowCategory(newCategory: string, openNavbar: boolean):void {
    this.category = newCategory;
    this.getProducts();
    this.isNavBarOpen = openNavbar;
  }

  ngOnDestroy(): void {
    this.productsSubs?.unsubscribe();
  }
}
