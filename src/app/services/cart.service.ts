import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable } from 'rxjs';

import { Cart, CartItem } from '../models/cart.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private readonly CART_KEY = 'cart';
  cart = new BehaviorSubject<Cart>({items: []});

  constructor(private _snackBar: MatSnackBar) {
    const cart = JSON.parse(localStorage.getItem(this.CART_KEY) || 'null');
    if(cart !== null) {
      this.cart.next(cart);
    }
    setTimeout(() => {
      localStorage.removeItem(this.CART_KEY);
    }, 24 * 60 * 60 * 1000);
  }

  addToCart(item: CartItem): void {
    const items = [...this.cart.value.items];

    const itemInCart = items.find((_item) => _item.id === item.id);

    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      items.push(item);
    }

    this.cart.next({ items });
    this.saveCart();
    this._snackBar.open('1 item added to cart!', 'Ok', { duration:3000 });
  }

  removeQuantity(item: CartItem): void {
    let itemForRemoval: CartItem | undefined;

    let filteredItems = this.cart.value.items.map((_item) => {
      if (_item.id === item.id) {
        _item.quantity--;
        if (_item.quantity === 0) {
          itemForRemoval = _item;
        }
      }

      return _item;
    })

    if (itemForRemoval) {
      filteredItems = this.removeFromCart(itemForRemoval, false);
    }

    this.cart.next({ items: filteredItems });
    this.saveCart();
    this._snackBar.open('1 item removed from cart', 'Ok', { duration: 3000 });
  }

  getTotal(items: Array<CartItem>): number {
    return items
      .map((item) => item.price * item.quantity)
      .reduce((prev, curr) => prev + curr, 0);
  }

  clearCart():void {
    this.cart.next({ items: [] });
    this.saveCart();
    this._snackBar.open('Cart is clear!', 'Ok', {duration: 3000});
  }

  removeFromCart(item: CartItem, update = true): Array<CartItem> {
    const filteredItems = this.cart.value.items.filter(
      (_item) => _item.id !== item.id
    );

    if (update) {
      this.cart.next({ items: filteredItems });
      this.saveCart();
      this._snackBar.open('1 item removed from cart!', 'Ok', { duration: 3000 });
    }

    return filteredItems;
  }

  cartHelper(product: Product): CartItem {
    return {
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id
    };
  }

  private saveCart(): void {
    localStorage.setItem(this.CART_KEY, JSON.stringify(this.cart.value));
  }

  
}
