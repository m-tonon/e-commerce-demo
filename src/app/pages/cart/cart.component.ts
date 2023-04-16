import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
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
    'Total',
  ];
  isAuthenticated = false;
  private userSub?: Subscription;

  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    const cartFromStorage = localStorage.getItem('cart');
    if (cartFromStorage) {
      this.cart = JSON.parse(cartFromStorage);
    }
    this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    });

    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
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

  onCheckout(): void {
    this.http
      .post('http://localhost:4242/checkout', {
        items: this.cart.items,
      })
      .subscribe(async (res: any) => {
        let stripe = await loadStripe(
          'pk_test_51MIUKlLErrBUmWMGzDquI0VSjJyLa7tjh4LdK20lACE5FrBJ8lcJMF8sEiDPw4H0CTUQDIKLorEum0DbBXl9ie9s003ahngWcJ'
        );
        stripe?.redirectToCheckout({
          sessionId: res.id,
        });
      });
  }

  ngOnDestroy(): void {
    this.userSub?.unsubscribe();
  }
}
