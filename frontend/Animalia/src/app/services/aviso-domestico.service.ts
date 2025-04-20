import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AvisoDomesticoService {
  private apiUrl = `${environment.apiUrl}/avisos-domesticos`;

  constructor(private http: HttpClient) { }

  getAvisos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getAvisoById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addAviso(aviso: any, headers: HttpHeaders): Observable<any> {
    return this.http.post(this.apiUrl, aviso, { headers });
  }

  updateAviso(aviso: any, headers: HttpHeaders): Observable<any> {
    return this.http.put(this.apiUrl, aviso, { headers });
  }

  deleteAviso(id: number, headers: HttpHeaders): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, { headers });
  }
} 