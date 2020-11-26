import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';
import User from './models/User';
import { AppService } from './services/app.service';
import Login from './models/Login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'pro-dashboard-angular';
  statusLogin: boolean;
  isLogged: boolean;

  user: User = {
    name: '',
    nasc: '',
    local: '',
    email: '',
    cargo: '',
    password: ''
  }

  users: User[];

  constructor(private appService: AppService, private authService: AuthService) {
    const statusLogin = localStorage.getItem('isLogged');
    if (this.statusLogin == true) {
      this.isLogged = true;
      localStorage.setItem('isLogged', 'true');
    } else {
      this.isLogged = false;
      localStorage.setItem('isLogged', 'false');
    }
  }
  getClasses() {
    const classes = {
      'pinned-sidebar': this.appService.getSidebarStat().isSidebarPinned,
      'toggeled-sidebar': this.appService.getSidebarStat().isSidebarToggeled
    }
    return classes;
  }
  toggleSidebar() {
    this.appService.toggleSidebar();
  }

  ngOnInit() {

  }

  logout() {
    this.isLogged = false;
    localStorage.setItem('isLogged', 'false')
  }

  createUser(){
    this.authService.createUser(this.user).subscribe(()=>{
      console.log('Usuário postado!');
    })
  }
  
  doLogin() {
    const email = this.user.email; 
    const password = this.user.password;
    this.authService.getAllUserData().subscribe((users) => {
      this.users = users;
      if(this.users.find(user => user.email == email && user.password == password)){
        this.isLogged = true;
        localStorage.setItem('isLogged', 'true');
      } else {
        console.log('ERRO!!! LOGIN INVALIDO')
      }
    });
  }

}

// this.isLogged = true;
// localStorage.setItem('isLogged', 'true');
// console.log(this.isLogged)