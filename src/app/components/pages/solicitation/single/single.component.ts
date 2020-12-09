import { Solicitation } from 'src/app/models/Solicitation';
import { SolicitationService } from 'src/app/services/solicitation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {


  solicitation: Solicitation;


  constructor(
    private solicitationService: SolicitationService,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.solicitationService.getSolicitationById(id).subscribe((solicitation) => {
      this.solicitation = solicitation;
      console.log(solicitation)
    });
  }


  changeStatus() {
    if (this.solicitation.status === 'RESOLVIDO') {
      this.solicitation.status = 'NÃO LIDO';
      this.solicitationService.updateSolicitation(this.solicitation).subscribe();
    } else {
      this.solicitation.status = 'RESOLVIDO';
      this.solicitationService.updateSolicitation(this.solicitation).subscribe();
    }
  }

}
