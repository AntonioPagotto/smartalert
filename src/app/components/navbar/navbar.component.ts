import { AppComponent } from './../../app.component';
import { AppService } from './../../services/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private appService: AppService, private appComponent: AppComponent) { }
  isCollapsed = true;

  logout(){
    this.appComponent.logout();
  }

  ngOnInit() {
  }

  toggleSidebarPin() {
    this.appService.toggleSidebarPin();
  }
  toggleSidebar() {
    this.appService.toggleSidebar();
  }

}
