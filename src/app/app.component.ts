import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Project';
  isMenuScrolled = false;
  isSidebarShowing = false;

  @HostListener('window:scroll', ['$event'])
  scrollCheck() {
    if (window.pageYOffset > 100)
      this.isMenuScrolled = true;
    else
      this.isMenuScrolled = false;
  }


  openSideBar() {
    this.isSidebarShowing = true;
  }

  closeSideBar() {
    this.isSidebarShowing = false;
  }

