import { Component, OnInit } from '@angular/core';
import { RequestServiceService } from 'src/app/service/request-service/request-service.service';
import { HttpClient } from '@angular/common/http';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit{
  user ={
    nom: '',
    prenom: '',
    email: '',
    motDePasse: '',
    numTel:'',
    nomEntreprise:'',
    role:'client'
  }
  request ={
    titre: '',
    message: '',
    service: '',
    date: '',
    etat: "EnAttente",
    budget: "0",
    type: "NonUrgent",
    idClient: 1
  }
  currentClient : any[] = []
  file ={
    Document: null as File | null
  }
  formData : FormData = new FormData()
  token: any
  users: any[] = []
  existsError = false
  invalidMailError = false
  emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  formatErr = false
  sizeErr = false
  formErr = false
  constructor(private requestService: RequestServiceService, private httpClient : HttpClient,
    private router : Router){}
  ngOnInit(): void {
    this.httpClient.get<any[]>("http://www.mohammedazhaf.me:8080/personnes").subscribe(
      result => {
        this.users = result
      }
    )
  }
  checkmail(){
    if(this.emailRegex.test(this.user.email)){
       this.invalidMailError = false
       if(this.users.filter(user => user.email === this.user.email).length!=0)
       this.existsError = true
       else
       this.existsError = false
    }
    else 
       this.invalidMailError = true
  }
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
  makeRequest() {
   // console.log(this.request);
   // console.log(this.user);
   // console.log(this.file.Document);
    // register a new user

    if(!this.sizeErr && !this.formatErr && !this.existsError && !this.invalidMailError){
    this.requestService.registeruser(this.user).subscribe(
      response1 => {
     //   console.log('user created successfully:', response1);
       // alert('user created successfully');
        localStorage.setItem('token', response1.token);
        this.token = jwt_decode(response1.token)
        this.token = JSON.parse(JSON.stringify(this.token))
        //this.request.idPersonne = this.token.idPersonne 
        this.httpClient.get<any[]>("http://www.mohammedazhaf.me:8080/client/all").subscribe(
          result=>{
            this.currentClient = result
            //console.log(this.currentClient)
            this.currentClient = this.currentClient.filter(item => item.personneId === this.token.idPersonne);
            //console.log(this.currentClient)

            //console.log("nays"+this.currentClient[0].idClient)
            this.request.idClient = this.currentClient[0].idClient

            const formData = new FormData();
            if(this.file.Document)
            formData.append('file', this.file.Document);
    
            formData.append('demande', JSON.stringify(this.request));
            this.httpClient.post<any>('http://www.mohammedazhaf.me:8080/api/demande/add', formData).subscribe(
               response => {
                //console.log('Request created successfully:', response);
                //alert('Request created successfully');
                }
            )
                this.router.navigate(['/my-requests'])
          }
        )
      },
      error1 => {
        console.error('Error creating user:', error1);
        alert('Error creating user');
      }
    );
    }
    else 
      this.formErr = false
  }
}
