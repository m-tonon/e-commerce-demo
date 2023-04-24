import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { AuthService } from 'src/app/auth/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {
  private _cart: Cart = { items: []};
  itemsQuantity = 0;
  openedCartMenu = false;
  openedProfileMenu = false;
  userData?: User;
  @Input() isLoggedIn: boolean = false;

  @Input()
  get cart(): Cart {
    return this._cart;
  }

  set cart(cart: Cart) {
    this._cart = cart;

    this.itemsQuantity = cart.items
    .map((item) => item.quantity)
    .reduce((prev, curr) => prev + curr, 0);
  }

  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    const userData = localStorage.getItem('userData');

    if (userData) {
      this.userData = JSON.parse(userData);
    }
  }

  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }

  onCartMenu(): void {
    this.openedCartMenu = !this.openedCartMenu;
  }

  onProfileMenu(): void {
    this.openedProfileMenu = !this.openedProfileMenu;
  }

  onLogout(): void {
    this.authService.logout();
    this._snackBar.open('You have logged out successfully!','Ok', {duration:3000});
  }

  isMobile() {
    return window.innerWidth < 768;
  }
}
