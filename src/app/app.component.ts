import { CitiesService } from './services/cities.service';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';

import User from './models/User';
import City from './models/City';

import { AppService } from './services/app.service';
import { MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'pro-dashboard-angular';
  statusLogin: boolean;
  isLogged: boolean;

  registerForm: FormGroup;

  cities$: Observable<City[]>;
  cities: City[]

  user: User = {
    name: '',
    nasc: '',
    local: '',
    email: '',
    cargo: 'Usuário Comum',
    password: ''
  }

  users: User[];

  constructor(
    private appService: AppService,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    public formBuilder: FormBuilder,
    private citiesService: CitiesService
  ) {
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
    this.cities$ = this.citiesService.getAllCities();
    this.cities$.subscribe((cities) => this.cities = cities);
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      nasc: ['', Validators.required],
      local: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  register() {
    this.authService.getAllUserData().subscribe((users) => {
      this.users = users;
      const email = this.user.email;
      if (!this.registerForm.valid) {
        return this.showMessage('Preencha todos os campos!', true);
      }
      if (this.users.find(user => user.email == email)) {
        return this.showMessage('Esse usuário já existe!', true);
      }
      this.authService.createUser(this.user).subscribe(() => {
        console.log('Usuário postado!');
      });
    });
  }

  logout() {
    this.isLogged = false;
    localStorage.setItem('isLogged', 'false')
  }

  doLogin() {
    const email = this.user.email;
    const password = this.user.password;
    this.authService.getAllUserData().subscribe((users) => {
      this.users = users;
      if (this.users.find(user => user.email == email && user.password == password)) {
        this.isLogged = true;
        localStorage.setItem('isLogged', 'true');
      } else {
        this.showMessage('E-mail ou senha inválidos!', true);
      }
    });
  }


  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

}

// this.isLogged = true;
// localStorage.setItem('isLogged', 'true');
// console.log(this.isLogged)