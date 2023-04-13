import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cart } from 'src/app/models/cart.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private _cart: Cart = { items: []};
  isSideBarShowing = false;
  itemsQuantity = 0;

  isAuthenticated = false;
  private userSub?: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    })
  }

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

  openSideBar() {
    this.isSideBarShowing = true;
  }

  closeSideBar(){
    this.isSideBarShowing = false;
  }

  ngOnDestroy(): void {
    this.userSub?.unsubscribe();
  }
}
