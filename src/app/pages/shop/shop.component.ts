import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styles: [
  ]
})
export class ShopComponent {
  isNavBarOpen = false;

  openNavBar() {
    this.isNavBarOpen = true;
  }

  closeNavBar() {
    this.isNavBarOpen = false;
  }
}
