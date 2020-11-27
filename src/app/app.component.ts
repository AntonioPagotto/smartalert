import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';
import User from './models/User';
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

  user: User = {
    name: '',
    nasc: '',
    local: '',
    email: '',
    cargo: '',
    password: ''
  }

  users: User[];

  constructor(
    private appService: AppService,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    public formBuilder: FormBuilder
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
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      nasc: ['', Validators.required],
      local: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  logout() {
    this.isLogged = false;
    localStorage.setItem('isLogged', 'false')
  }

  createUser() {
    if (this.registerForm.valid) {
      this.authService.createUser(this.user).subscribe(() => {
        console.log('Usuário postado!');
      })
    } else {
      this.showMessage('Preencha todos os campos!', true);
    }
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