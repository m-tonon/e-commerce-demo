import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {
  openedCartMenu = false;

  onCartMenu() {
    this.openedCartMenu = !this.openedCartMenu;
  }

  isMobile() {
    return window.innerWidth < 768;
  }
}
