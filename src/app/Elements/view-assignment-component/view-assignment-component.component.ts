import { Component,Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { Demande } from 'src/app/Models/Demande';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-assignment-component',
  templateUrl: './view-assignment-component.component.html',
  styleUrls: ['./view-assignment-component.component.css']
})
export class ViewAssignmentComponentComponent implements OnInit{
  constructor(private httpClient : HttpClient, private route : ActivatedRoute,
    private router : Router){}  
  demande = ""
  assignment: any[] = []
  token : any
  showFullDescription = false;
  ngOnInit() {
    if(localStorage.getItem('token') != null){ 
      this.token =localStorage.getItem('token');
          this.token = jwt_decode(this.token)
          this.token = JSON.parse(JSON.stringify(this.token))
    }
    this.demande = this.route.snapshot.paramMap.get('id') ?? "";
  
    this.httpClient.get<any[]>("http://www.mohammedazhaf.me:8080/api/affectation/all").subscribe(
      result => {
        if(result){
          this.assignment = result.filter(item => item.idAffectation == this.demande)
          if(!this.assignment[0].idAffectation.employee.personne.idPersonne == this.token.idPersonne)
            this.router.navigate(['my-assignments'])
        }
      },
      error => {
        this.router.navigate(['my-assignments'])
      }
    )
  
  }
  toggleDescription() {
    this.showFullDescription = !this.showFullDescription;
  }

}
