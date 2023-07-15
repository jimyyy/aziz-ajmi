import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isNavbarOpen = false;



constructor() {

}
  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }




ngOnInit(): void {

  }

}
