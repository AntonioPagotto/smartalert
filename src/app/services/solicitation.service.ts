import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import Solicitation from '../models/Solicitation';

import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SolicitationService {


  apiUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  //create

  createSolicitation(solicitation: Solicitation) {
    return this.http.post<Solicitation>(`${this.apiUrl}/solicitations`, solicitation);
  }

  getAllSolicitations(): Observable<Solicitation[]> {
    return this.http.get<Solicitation[]>(`${this.apiUrl}/solicitations`).pipe(map((obj) => obj))
  }

  //update

  updateSolicitation(solicitation: Solicitation): Observable<Solicitation> {
    return this.http.put<Solicitation>(`${this.apiUrl}/${solicitation.id}`, solicitation).pipe(
      map((obj)=>obj));
  }

  //delete

}
