import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import City from '../models/City';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {


  apiUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  //create



  createSolicitation(city: City) {
    return this.http.post<City>(`${this.apiUrl}/cities`, city);
  }

  getAllCities(): Observable<City[]> {
    return this.http.get<City[]>(`${this.apiUrl}/cities`).pipe(map((obj) => obj))
  }

  //update

  updateSolicitation(city: City): Observable<City> {
    return this.http.put<City>(`${this.apiUrl}/cities/${city.id}`, city).pipe(
      map((obj)=>obj));
  }

  //delete

}
