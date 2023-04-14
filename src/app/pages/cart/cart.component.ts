import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: [],
})
export class CartComponent implements OnInit, OnDestroy {
  cart: Cart = {
    items: [
      {
        product: '../../../../../../assets/images/products/men/product4.jpg',
        name: 'mens watch',
        price: 150,
        quantity: 1,
        id: 1,
      },
    ],
  };
  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'Product',
    'Name',
    'Price',
    'Quantity',
    'Total'
  ];
  isAuthenticated = false;
  private userSub?: Subscription;

  constructor(
    private cartService: CartService,
    private authService: AuthService) {

  }

  ngOnInit(): void {
    const cartFromStorage = localStorage.getItem('cart');
    if (cartFromStorage) {
      this.cart = JSON.parse(cartFromStorage);
    }
    this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    });

    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    })
  }

  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }

  onRemoveFromCart(item: CartItem): void {
    this.cartService.removeFromCart(item);
  }

  onAddQuantity(item: CartItem): void {
    this.cartService.addToCart(item);
  }

  onRemoveQuantity(item: CartItem): void {
    this.cartService.removeQuantity(item);
  }

  ngOnDestroy(): void {
    this.userSub?.unsubscribe();
  }
}
