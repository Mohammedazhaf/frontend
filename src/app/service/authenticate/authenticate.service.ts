import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  private baseUrl = 'http://www.mohammedazhaf.me:8080/auth/authenticate';
  private authUrl = 'http://www.mohammedazhaf.me:8080/auth/validateToken';
  constructor(private http: HttpClient) { }
  login(user: any) {
    return this.http.post<any>(`${this.baseUrl}`, user);
  }

// token validation
validateToken(token: string): Observable<boolean> {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    })
  };
  return this.http.get<boolean>(this.authUrl, httpOptions);
}
}


 