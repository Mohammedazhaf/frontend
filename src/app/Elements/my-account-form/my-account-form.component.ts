import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-my-account-form',
  templateUrl: './my-account-form.component.html',
  styleUrls: ['./my-account-form.component.css']
})
export class MyAccountFormComponent implements OnInit {
  user: any;
  token: any;

  constructor(private http: HttpClient,    private route: ActivatedRoute,    private router: Router  ) {}
  
  ngOnInit() {
    if (localStorage.getItem('token') != null) {
      this.token = localStorage.getItem('token');
      this.token = jwt_decode(this.token);
      this.token = JSON.parse(JSON.stringify(this.token));
      console.log(this.token);
      this.getPersonneById(this.token.idPersonne);
    }
  }

  getPersonneById(id: number): void {
    const apiUrl = `http://localhost:8080/personnes/${id}`; 
    this.http.get(apiUrl).subscribe((user: any) => {
      this.user = user;
    });
  }
  
  updateUser(): void {
    const person = {
      nom: this.user.nom,
      prenom: this.user.prenom,
      numTel: this.user.numTel,
      email: this.user.email,
      motDePasse: this.user.motDePasse,
      nomEntreprise:this.user.nomEntreprise,
      role : this.token.role
    }
    const apiUrl = `http://localhost:8080/personnes/${this.user.idPersonne}`;
    this.http.put(apiUrl, person ).subscribe(() => {
      console.log('User updated successfully.');
      alert("User updated successfully");
      
    });
  }
}
