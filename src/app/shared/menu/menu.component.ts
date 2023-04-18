import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {
  private _cart: Cart = { items: []};
  itemsQuantity = 0;
  openedCartMenu = false;
  openedProfileMenu = false;
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
