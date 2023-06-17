import { Component, OnInit } from '@angular/core';
import { RequestServiceService } from 'src/app/service/request-service/request-service.service';
import { HttpClient } from '@angular/common/http';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{
  user = {
    "personne": {
      "nom": "",
      "prenom": "",
      "numTel": "",
      "email": "",
      "motDePasse": "",
      "role": "Technicien",

    },
    "speciality": "",
    "password": "",
    "cin": ""
  }
  added = false
  errorAdd = false
  existsError = false
  invalidMailError = false
  emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  users: any[] = []
  constructor(private requestService: RequestServiceService, private httpClient : HttpClient,
    private router : Router){}

    checkmail(){
      if(this.emailRegex.test(this.user.personne.email)){
         this.invalidMailError = false
         if(this.users.filter(user => user.email === this.user.personne.email).length!=0)
         this.existsError = true
         else
         this.existsError = false
      }
      else 
         this.invalidMailError = true
    }
  
  ngOnInit(): void {
      this.httpClient.get<any[]>("http://www.mohammedazhaf.me:8080/personnes").subscribe(
      result => {
        this.users = result
      }
  )
    }
  createEmployee(){
      if(this.existsError == false && this.invalidMailError == false){
        this.user.password = this.user.personne.motDePasse
        this.httpClient.post("http://www.mohammedazhaf.me:8080/respo/employee/add",this.user).subscribe(
          result=> {
            this.added = true
          },
          error => {
            this.errorAdd = true
          }
        )
      }
        else 
        this.errorAdd = true
  }
}
