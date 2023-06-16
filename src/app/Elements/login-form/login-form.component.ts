import { Component } from '@angular/core';
import { AuthenticateService } from 'src/app/service/authenticate/authenticate.service';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  user = {
    email: '',
    motDePasse: ''
  };
  error=0
  constructor(private loginService: AuthenticateService,private router: Router,
     private httpClient: HttpClient) { }
  
  login() {
    console.log(this.user.email)
    console.log(this.user.motDePasse)
    this.loginService.login(this.user).subscribe(
      response => {
        localStorage.setItem('token', response.token);
        /*let current = this.decodeJwt(response.token)
        current = JSON.parse(JSON.stringify(current))
        localStorage.setItem('user', JSON.stringify(current));*/
        this.router.navigateByUrl('/dashboard');

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
