import { SolicitationService } from './../../../services/solicitation.service';
import { Component, OnInit } from '@angular/core';

import Solicitation from 'src/app/models/Solicitation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  solicitations: Solicitation[];

  constructor(private solicitationService: SolicitationService) { }

  ngOnInit() {
    this.solicitationService.getAllSolicitations().subscribe(solicitation => {
      this.solicitations = solicitation;
    })
  }

}
