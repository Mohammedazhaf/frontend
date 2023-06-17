import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private baseUrl = 'http://www.mohammedazhaf.me:8080/api/demande/';
  constructor(private http: HttpClient) { }
  login(user: any) {
    return this.http.post<any>(`${this.baseUrl}`, user);
  }

// token validation
getCount(token: string): Observable<number> {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    })
  };
  return this.http.get<number>(this.baseUrl+"count", httpOptions);
}
}


 