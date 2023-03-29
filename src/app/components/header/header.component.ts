import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isSideBarShowing = false;

  openSideBar() {
    this.isSideBarShowing = true;
  }
 
  closeSideBar(){
    this.isSideBarShowing = false;
  }
}
