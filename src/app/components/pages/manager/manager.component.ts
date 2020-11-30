import { RoleService } from './../../../services/role.service';
import { CityService } from './../../../services/city.service';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import City from 'src/app/models/City';
import Role from 'src/app/models/Role';
import User from 'src/app/models/User';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {

  cities: City[];
  roles: Role[];
  users: User[];

  constructor(
    private cityService: CityService,
    private roleService: RoleService,
    private userService: UserService
    ) { }

  ngOnInit() {
    this.cityService.getAllCities().subscribe(cities => this.cities = cities);
    this.roleService.getAllRoles().subscribe(roles => this.roles = roles);
    this.userService.getAllUserData().subscribe(users => this.users = users);
  }

}
