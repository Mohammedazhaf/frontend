import { Component } from '@angular/core';
import { RequestServiceService } from 'src/app/service/request-service/request-service.service';


@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent {
  user ={
    nom: '',
    prenom: '',
    email: '',
    motDePasse: '',
    numTel:'',
    nomEntreprise:''
  }
  request ={
    title: '',
    description: '',
    service: '',
    deadline: '',
    Document: ''  
  }

  constructor(private requestService: RequestServiceService) { }

  makeRequest() {
    console.log(this.request);
    console.log(this.user);
    // register a new user
    this.requestService.registeruser(this.user).subscribe(
      response1 => {
        console.log('user created successfully:', response1);
        alert('user created successfully');
      },
      error1 => {
        console.error('Error creating user:', error1);
        alert('Error creating user');
      }
    );
    // Envoyer la demande
    this.requestService.createRequest(this.request).subscribe(
      response => {
        console.log('Request created successfully:', response);
        alert('Request created successfully');
      },
      error => {
        console.error('Error creating request:', error);
        alert('Error creating request');
      }
    );
  }
}
