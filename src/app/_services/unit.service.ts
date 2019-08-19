import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Unit, UnitContacts } from '../_models/unit';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Authorization': 'Bearer ' + localStorage.getItem('token')
//   })
// };

@Injectable({
  providedIn: 'root'
})
export class UnitService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getUnits(): Observable<Unit[]> {
    return this.http.get<Unit[]>(this.baseUrl + 'units');
  }
  getAll(): Observable<Unit[]> {
    return this.http.get<Unit[]>(this.baseUrl + 'units');
  }

  getUnit(id): Observable<Unit> {
    return this.http.get<Unit>(this.baseUrl + 'units/' + id);
  }

  updateUnit(id: number, unit: Unit) {
    return this.http.put(this.baseUrl + 'users/' + id, unit);
  }

  addUnit(model: any) {
    return this.http.post(this.baseUrl + 'units', model);
  }
}
