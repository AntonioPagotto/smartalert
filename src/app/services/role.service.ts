import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import Role from '../models/Role';

@Injectable({
    providedIn: 'root'
})
export class RoleService {

    apiUrl = 'http://localhost:3000'

    constructor(private http: HttpClient) { }

    createRole(role: Role) {
        return this.http.post<Role>(`${this.apiUrl}/roles`, role);
    }

    getAllRoles() {
        return this.http.get<Role[]>(`${this.apiUrl}/roles`).pipe((obj) => obj);
    }

}
