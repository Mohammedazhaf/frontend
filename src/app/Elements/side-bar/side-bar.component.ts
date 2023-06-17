import { Component } from '@angular/core';
import { AuthenticateService } from 'src/app/service/authenticate/authenticate.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from 'src/app/service/authenticate/projects/projects.service';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit{
  constructor(private authService: AuthenticateService,private router: Router,private projectsService: ProjectsService) {}
  //current : any
  projectsCount = 0
  token : any
  ngOnInit() {
    if(localStorage.getItem('token') != null){ 
      this.token =localStorage.getItem('token');
          this.token = jwt_decode(this.token)
          this.token = JSON.parse(JSON.stringify(this.token))
          console.log(this.token)
    }
    else 
    this.router.navigate(['login'])

    /*const currentUser = localStorage.getItem('user');
    if (currentUser !== null) {
      this.current = JSON.parse(currentUser);
    }
    const token = localStorage.getItem('token');
    if(token !== null){
      this.authService.validateToken(token).subscribe(
      result => {
        if (result) {
          console.log('Token is valid.');
        } else {
          this.router.navigateByUrl('/login');
        }
      },
      error => {
        this.router.navigateByUrl('/login');
      }
    )
    this.projectsService.getCount(token).subscribe(
      result => {
        this.projectsCount = result
      }
    )
    }
    
    else 
      this.router.navigateByUrl('/login');
*/
    
  }
  logout(){
    localStorage.removeItem("token")
  }
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
