/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Acerca } from '../models/acerca';

@Injectable({
  providedIn: 'root'
})
export class AcercadeService {
  private apiServerUrl = 'https://erikmwagnerap.herokuapp.com/api/';

  constructor(private http: HttpClient) {}

  public getAcerca(): Observable<Acerca[]> {
    return this.http.get<any[]>('https://erikmwagnerap.herokuapp.com/api/ver/acerca/');
  }
  public addAcerca(acerca: Acerca): Observable<Acerca> {
    return this.http.post<any>('https://erikmwagnerap.herokuapp.com/api/new/acerca/', acerca);
  }
  public updateAcerca(acerca: Acerca): Observable<Acerca> {
    return this.http.put<Acerca>('https://erikmwagnerap.herokuapp.com/api/modificar/acerca/', acerca);
  }
  public deleteAcerca(id: number): Observable<void> {
    return this.http.delete<void>(
      'https://erikmwagnerap.herokuapp.com/api/delete/acerca/${id}'
    );
  }
}
*/