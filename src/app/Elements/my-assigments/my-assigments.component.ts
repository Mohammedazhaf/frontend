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
  assignments: any[] = []; 
  progress: any[] = [];
  done: any[] = [] 
  active = 'progress';
  chosen: any[] = [];

  token: any;

  constructor(private httpClient: HttpClient, private router: Router) {}
  ngOnInit() {
    if (localStorage.getItem('token') != null) {
      this.token = localStorage.getItem('token');
      this.token = jwt_decode(this.token);
      this.token = JSON.parse(JSON.stringify(this.token));
      this.httpClient
        .get<any[]>('http://localhost:8080/api/affectation/all')
        .subscribe((result) => {
          this.assignments = result.filter((item) => item.employee.personne.idPersonne == this.token.idPersonne );
          this.progress = this.assignments.filter((item) => item.demande.etat === "EnCours" );
          this.done = this.assignments.filter( (item) => item.demande.etat === "Termine" );
          this.chosen = this.progress;
          console.log(this.assignments);
        });
    } else this.router.navigate(['login']);
  }

  filter(choice: string) {
    this.active = choice;
    if (choice == 'progress') this.chosen = this.progress;
    if(choice == "done") this.chosen = this.done;
  }
  navigate(lien: number) {
    this.router.navigate(['/my-assignments/' + lien]);
  }
}
 