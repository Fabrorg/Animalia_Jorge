import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AvisoDomesticoService {
  private apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) { }

  getAvisos(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/avisos-domesticos');
  }

  getAvisoById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/avisos-domesticos/${id}`);
  }

  addAviso(aviso: any, headers: HttpHeaders): Observable<any> {
    return this.http.post(this.apiUrl + '/avisos-domesticos', aviso, { headers });
  }

  updateAviso(aviso: any, headers: HttpHeaders): Observable<any> {
    return this.http.put(this.apiUrl, aviso, { headers });
  }

  deleteAviso(id: number, headers?: HttpHeaders): Observable<any> {
    const httpOptions = headers ? { headers } : {};
    return this.http.delete(`${this.apiUrl}/avisos-domesticos/${id}`, httpOptions);
  }
}