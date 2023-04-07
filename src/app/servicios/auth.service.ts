import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginUsuario } from '../login-usuario';
import { Observable } from 'rxjs';
import { JwtModel } from '../jwt-model';

const cabecera = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authURL = 'https://ultimointentoerik.onrender.com/api/auth/';

  constructor(private httpClient: HttpClient) { }

  public login(usuario: LoginUsuario): Observable<JwtModel> {
    return this.httpClient.post<any>("https://ultimointentoerik.onrender.com/api/auth/login", usuario);
  }
}