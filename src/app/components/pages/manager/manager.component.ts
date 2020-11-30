import { CitiesService } from './../../../services/cities.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {


  constructor(private citiesService: CitiesService) { }

  ngOnInit() {
    
  }

}
