import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD
  title = 'Angular-Project';
=======

  title = '';

>>>>>>> b7402df1c7010cf364ee6fedaab7fdd44584513a
  isMenuScrolled = false;
  isSidebarShowing = false;

  @HostListener('window:scroll', ['$event'])
  scrollCheck() {
    if (window.pageYOffset > 100)
      this.isMenuScrolled = true;
    else
      this.isMenuScrolled = false;
<<<<<<< HEAD
  }


=======


    // console.log(this.isMenuScrolled)
  }

>>>>>>> b7402df1c7010cf364ee6fedaab7fdd44584513a
  openSideBar() {
    this.isSidebarShowing = true;
  }

  closeSideBar() {
    this.isSidebarShowing = false;
  }

<<<<<<< HEAD
=======
  scrollToTop() {
    document.body.scrollIntoView({ behavior: 'smooth' })
  }
}

>>>>>>> b7402df1c7010cf364ee6fedaab7fdd44584513a
