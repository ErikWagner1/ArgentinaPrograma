/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Acerca } from '../models/acerca';

@Injectable({
  providedIn: 'root'
})
export class AcercadeService {
  private apiServerUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) {}

  public getAcerca(): Observable<Acerca[]> {
    return this.http.get<any[]>('http://localhost:8080/api/ver/acerca/');
  }
  public addAcerca(acerca: Acerca): Observable<Acerca> {
    return this.http.post<any>('http://localhost:8080/api/new/acerca/', acerca);
  }
  public updateAcerca(acerca: Acerca): Observable<Acerca> {
    return this.http.put<Acerca>('http://localhost:8080/api/modificar/acerca/', acerca);
  }
  public deleteAcerca(id: number): Observable<void> {
    return this.http.delete<void>(
      'http://localhost:8080/api/delete/acerca/${id}'
    );
  }
}
*/