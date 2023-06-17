import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Demande } from 'src/app/Models/Demande';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-my-assigments',
  templateUrl: './my-assigments.component.html',
  styleUrls: ['./my-assigments.component.css']
})
export class MyAssigmentsComponent {
  requests: Demande[] = []; 
  progress: Demande[] = [];
  done: Demande[] = [] 
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
         
          this.progress = result.filter((item) => item.etat === "EnCours" );
          this.done = result.filter( (item) => item.etat === "Termine" );
          this.chosen = this.done;
          console.log(result);
        });
    } else this.router.navigate(['login']);
  }

  filter(choice: string) {
    this.active = choice;
    if (choice == 'progress') this.chosen = this.progress;
    if(choice == "done") this.chosen = this.done;
  }
  navigate(lien: number) {
    this.router.navigate(['' + lien]);
  }
}
 