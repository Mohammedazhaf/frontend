import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RequestServiceService } from 'src/app/service/request-service/request-service.service';

@Component({
  selector: 'app-add-request-form',
  templateUrl: './add-request-form.component.html',
  styleUrls: ['./add-request-form.component.css'],
})
export class AddRequestFormComponent {
  request = {
    title: '',
    description: '',
    service: '',
    deadline: '',
    Document: ''
  }; 

  constructor(private http: HttpClient) {}

  createDemande(){
    
  }
}
