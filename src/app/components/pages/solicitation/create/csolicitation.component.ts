import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Solicitation from 'src/app/models/Solicitation';
import { SolicitationService } from 'src/app/services/solicitation.service';

@Component({
  selector: 'app-csolicitation',
  templateUrl: './csolicitation.component.html',
  styleUrls: ['./csolicitation.component.scss']
})
export class CSolicitationComponent implements OnInit {

  
  solicitation: Solicitation = {
    title: '',
    description: '',
    status: 'inativo',
    local: '',
    data: ''
  }

  constructor(private solicitationService: SolicitationService, private router: Router) { }

  ngOnInit() {

  }


  createSolicitation(): void{
    this.solicitationService.createSolicitation(this.solicitation).subscribe(()=>{
      this.router.navigate(['/home'])
    })
  }


  cancel(): void{
    this.router.navigate(['/home'])
  }

}
