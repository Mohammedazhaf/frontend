import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/service/authenticate/authenticate.service';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit{
  user = {
    email: '',
    motDePasse: ''
  };
  token : any
  error=0
  constructor(private loginService: AuthenticateService,private router: Router,
     private httpClient: HttpClient) { }
  
     ngOnInit(): void {
       if(localStorage.getItem('token')){
        this.token = localStorage.getItem('token')
        this.token = jwt_decode(this.token)
        this.token = JSON.parse(JSON.stringify(this.token))
        if(this.token.role == "Responsable")
        this.router.navigateByUrl('/requests');
        if(this.token.role == "client")
        this.router.navigateByUrl('/my-requests');
        if(this.token.role == "Technicien")
        this.router.navigateByUrl('/my-assignments');
        if(this.token.role == "Secretaire")
        this.router.navigateByUrl('/validate-requests');
       }
     }
  login() {
    console.log(this.user.email)
    console.log(this.user.motDePasse)
    this.loginService.login(this.user).subscribe(
      response => {
        localStorage.setItem('token', response.token);
        this.token = response.token;
          this.token = jwt_decode(this.token)
          this.token = JSON.parse(JSON.stringify(this.token))
        /*let current = this.decodeJwt(response.token)
        current = JSON.parse(JSON.stringify(current))
        localStorage.setItem('user', JSON.stringify(current));*/
        if(this.token.role == "Responsable")
        this.router.navigateByUrl('/requests');
        if(this.token.role == "client")
        this.router.navigateByUrl('/my-requests');
        if(this.token.role == "Technicien")
        this.router.navigateByUrl('/my-assignments');
        if(this.token.role == "Secretaire")
        this.router.navigateByUrl('/validate-requests');

      },
      error => {
        this.error=1;
      }
    );  }
    decodeJwt(jwtToken: string): any {
      try {
        const decodedToken = jwt_decode(jwtToken);
        return decodedToken;
      } catch (error) {
        console.error('Error decoding JWT:', error);
        return null;
      }
    } 
}
