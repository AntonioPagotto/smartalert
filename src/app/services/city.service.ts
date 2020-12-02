import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import City from '../models/City';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  apiUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  //crud City

  createCity(city: City) {
    return this.http.post<City>(`${this.apiUrl}/cities`, city);
  }

  readCityById(id: number){
    return this.http.get<City>(`${this.apiUrl}/cities/${id}`)
  }

  editCity(city: City) {
    return this.http.post<City>(`${this.apiUrl}/cities/${city.id}`, city.id);
  }

  deleteCity(id: number){
    return this.http.delete<void>(`${this.apiUrl}/cities/${id}`)
  }

  //login

  getAllCities(){
    return this.http.get<City[]>(`${this.apiUrl}/cities`).pipe(map((obj) => obj))
  }


}
