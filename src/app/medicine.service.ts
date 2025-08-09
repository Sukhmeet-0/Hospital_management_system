import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from './medicines';

@Injectable({
  providedIn: 'root',
})
export class MedicineService {
  constructor(private httpClient: HttpClient) {}
  private baseUrl = 'http://localhost:8080/api/v3';

  getMedicines(): Observable<Medicine[]> {
    return this.httpClient.get<Medicine[]>(`${this.baseUrl}`);
  }
  createMedicine(medicine:Medicine): Observable<Medicine> {
    return this.httpClient.post<Medicine>(`${this.baseUrl}`, medicine);
  }
  deleteMedicine(id: number): Observable<object> {
    return this.httpClient.delete(`${this.baseUrl}/medicines/${id}`);
  }
}
