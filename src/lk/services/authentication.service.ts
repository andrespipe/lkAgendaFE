import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IAuthentication } from '../models/authentication.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseUrl = `http://localhost:3001/auth`;

  constructor(private http: HttpClient) { }


  public login(loginData: IAuthentication): Observable<any> {
    const endpoint = `${this.baseUrl}/login`;
    return this.http.post(endpoint, loginData);
  }

  public logOut(sessionId: string): Observable<any> {
    const endpoint = `${this.baseUrl}/logout/${sessionId}`;
    return this.http.get(endpoint);
  }
}
