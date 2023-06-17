import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Demande } from 'src/app/Models/Demande';

import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css'],
})
export class RequestsComponent implements OnInit {
  requests: Demande[] = [];
  pending: Demande[] = [];
  progress: Demande[] = [];
  active = 'progress';
  chosen: Demande[] = [];

  token: any;

  constructor(private httpClient: HttpClient, private router: Router) {}
  ngOnInit() {
    if (localStorage.getItem('token') != null) {
      this.token = localStorage.getItem('token');
      this.token = jwt_decode(this.token);
      this.token = JSON.parse(JSON.stringify(this.token));
      this.httpClient
        .get<Demande[]>('http://localhost:8080/api/demande/all')
        .subscribe((result) => {
          this.requests = result;
          this.pending = result.filter(
            (item) => item.verSecretaire === false  
          );
          this.progress = result.filter((item) => item.verSecretaire === true);
          this.chosen = this.progress;
          console.log(result);
        });
    } else this.router.navigate(['login']);
  }

  filter(choice: string) {
    this.active = choice;
    if (choice == 'pending') this.chosen = this.pending;
    if (choice == 'progress') this.chosen = this.progress;
  }
  navigate(lien: number) {
    this.router.navigate(['my-requests-valid/' + lien]);
  }
}
 