import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isSideBarShowing = true;

  openSideBar() {
    this.isSideBarShowing = true;
  }

  closeSideBar(){
    this.isSideBarShowing = false;
  }
}
