import { Component,Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { Demande } from 'src/app/Models/Demande';
import { Router } from '@angular/router';
@Component({
  selector: 'app-respo-demande-track',
  templateUrl: './respo-demande-track.component.html',
  styleUrls: ['./respo-demande-track.component.css']
})
export class RespoDemandeTrackComponent  implements OnInit{
  constructor(private httpClient : HttpClient, private route : ActivatedRoute,
    private router : Router){}  
  
// hada howa l id dyal demande khass tste3mlo f get
@Input() demande = ""
request: Demande[] = []

Fichier = ""
// end


token : any
showFullDescription = false;
ngOnInit() {
  if(localStorage.getItem('token') != null){ 
    this.token =localStorage.getItem('token');
        this.token = jwt_decode(this.token)
        this.token = JSON.parse(JSON.stringify(this.token))
  }
  this.demande = this.route.snapshot.paramMap.get('id') ?? "";

  this.httpClient.get<Demande>("http://localhost:8080/api/demande/getById/"+this.demande).subscribe(
    result => {
      if(result){
        console.log(result.client.idClient + "  ==  "+ this.token.idPersonne)
        if(result.client.idClient == this.token.idPersonne)
          this.request[0] = result
        else 
          this.router.navigate(['my-requests'])
      }
    },
    error => {
      this.router.navigate(['my-requests'])
    }
  )

}
toggleDescription() {
  this.showFullDescription = !this.showFullDescription;
}
updateToProgress(){
  this.httpClient.put("http://localhost:8080/api/demande/accepterResponsable/"+this.demande,null).subscribe(
    result => {
      console.log("accepted");
      this.ngOnInit()
    }
  )
}
updateToDone(){
  this.httpClient.put("http://localhost:8080/api/demande/doneResponsable/"+this.demande,null).subscribe(
    result => {
      console.log("done");
      this.ngOnInit()
    }
  )
}
updateToReject(){
  this.httpClient.put("http://localhost:8080/api/demande/rejeterResponsable/"+this.demande,null).subscribe(
    result => {
      console.log("rejected");
      this.ngOnInit()
    }
  )
}
}
