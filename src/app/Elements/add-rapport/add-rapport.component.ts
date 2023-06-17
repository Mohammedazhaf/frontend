import { Component, OnInit } from '@angular/core';
import { RequestServiceService } from 'src/app/service/request-service/request-service.service';
import { HttpClient } from '@angular/common/http';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-rapport',
  templateUrl: './add-rapport.component.html',
  styleUrls: ['./add-rapport.component.css']
})
export class AddRapportComponent implements OnInit {
  constructor(private requestService: RequestServiceService, private httpClient : HttpClient,
    private router : Router){}
  assignments: any[] = []
  rapport = {
    "date": "2023-06-17T00:00:00Z",
    "contenu": "",
    "idEmployee": "",
    "idDemande": ""
  }
  token : any
  file ={
    Document: null as File | null
  }
  added = false
  errorAdd = false
  checkFormat(fileEvent: any) {
    if (fileEvent.target.files[0]) {
      if (fileEvent.target.files[0].type != "application/pdf") {
        this.formatErr = true;
      } else {
        this.formatErr = false;
      }
    } else {
      this.formatErr = false;
    }
    
  }

  checkSize(fileEvent: any){
    if (fileEvent.target.files[0]) {
      if (fileEvent.target.files[0].size > (5120 * 1024 )) {
        this.sizeErr = true;
      } else {
        this.sizeErr = false;
      }
    } else {
      this.sizeErr = false;
    }
  }
  checkFile(fileEvent: any){
    this.checkFormat(fileEvent)
    this.checkSize(fileEvent)
    this.file.Document = fileEvent.target.files[0]
  }
  formatErr = false
  sizeErr = false
  makeRequest() {
     if(!this.sizeErr && !this.formatErr){
         this.rapport.idEmployee = this.assignments[0].employee.idEmployee
         const formData = new FormData();
         if(this.file.Document)
         formData.append('file', this.file.Document);
         else
         formData.append('file', "");
         formData.append('rapport', JSON.stringify(this.rapport));
         this.httpClient.post<any>('http://localhost:8080/api/rapport/add', formData).subscribe(
            response => {
              this.added = true
                 },
            error => {
              this.added = true

            }
             )
     }
   }
   ngOnInit(): void {
    if (localStorage.getItem('token') != null) {
      this.token = localStorage.getItem('token');
      this.token = jwt_decode(this.token);
      this.token = JSON.parse(JSON.stringify(this.token));
      this.httpClient
        .get<any[]>('http://localhost:8080/api/affectation/all')
        .subscribe((result) => {
          this.assignments = result.filter((item) => item.employee.personne.idPersonne == this.token.idPersonne );
          this.assignments = this.assignments.filter((item) => item.demande.etat == "EnCours" );
        });
    } else this.router.navigate(['login']);
   }
}
