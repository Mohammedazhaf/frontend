import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestServiceService {


  private baseUrl = 'http://www.mohammedazhaf.me:8080/api/requests';
  private baseUrl2 = 'http://www.mohammedazhaf.me:8080/auth/register';


  constructor(private http: HttpClient) { }
  registeruser(user: any): Observable<any> {
    return this.http.post(this.baseUrl2, user);
  }
  createRequest(request: any): Observable<any> {
    return this.http.post(this.baseUrl, request);
  }
 
}
 