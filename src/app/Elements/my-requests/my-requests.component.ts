import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Demande } from 'src/app/Models/Demande';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.component.html',
  styleUrls: ['./my-requests.component.css']
})
export class MyRequestsComponent implements OnInit{
  requests : Demande[] = []
  pending: Demande[] = []
  progress: Demande[] = []
  done: Demande[] = []
  declined: Demande[] = []
  active = "progress"
  chosen : Demande[] = []
  
  token : any
  constructor(private httpClient : HttpClient, private router : Router){}
  ngOnInit(){
    if(localStorage.getItem('token') != null){ 
          this.token =localStorage.getItem('token');
          this.token = jwt_decode(this.token)
          this.token = JSON.parse(JSON.stringify(this.token))
          this.httpClient.get<Demande[]>("http://www.mohammedazhaf.me:8080/api/demande/all").subscribe(
            result => {
              this.requests = result.filter(item => item.client.personneId === this.token.idPersonne)

              this.pending = this.requests.filter(item => item.responseResponsable === "pending"
              && item.etat === "EnAttente");
              this.progress = this.requests.filter(item => item.responseResponsable === "acceptable" 
              && item.etat === "EnCours" );
              this.done = this.requests.filter(item => item.responseResponsable === "acceptable" 
              && item.etat === "Termine" );
              this.declined = this.requests.filter(item => item.responseResponsable === "rejected");
              this.chosen = this.progress
              console.log(this.requests)
            }
          )
    }
    else 
    this.router.navigate(['login'])
  }
  filter(choice : string){
    this.active = choice
    if(choice == "pending")
    this.chosen = this.pending
    if(choice == "done")
    this.chosen = this.done
    if(choice == "declined")
    this.chosen = this.declined
    if(choice == "progress")
    this.chosen = this.progress
  }
  navigate(lien : number){
    this.router.navigate(["my-requests/"+lien]);
  }
}









