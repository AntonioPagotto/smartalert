import { SingleComponent } from './components/pages/solicitation/single/single.component';
import { ManagerComponent } from './components/pages/manager/manager.component';
import { CSolicitationComponent } from './components/pages/solicitation/create/csolicitation.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '',   redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent },
  {path: 'csolicitation', component: CSolicitationComponent },
  {path: 'manager', component: ManagerComponent },
  {path: 'solicitations/single/:id', component: SingleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
