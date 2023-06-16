import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Demande } from 'src/app/Models/Demande';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { Personne } from 'src/app/Models/Personne';

@Component({
  selector: 'app-respo-requests',
  templateUrl: './respo-requests.component.html',
  styleUrls: ['./respo-requests.component.css']
})
export class RespoRequestsComponent implements OnInit{
requests : any[] = []
pending: any[] = []
progress: any[] = []
done: any[] = []
declined: any[] = []
active = "progress"
chosen : any[] = []
mappedDemandes : any[] = []
token : any
matchedPersonne : any
constructor(private httpClient : HttpClient, private router : Router){}
ngOnInit(){
  if(localStorage.getItem('token') != null){ 
        this.token =localStorage.getItem('token');
        this.token = jwt_decode(this.token)
        this.token = JSON.parse(JSON.stringify(this.token))
        this.httpClient.get<any[]>("http://localhost:8080/api/demande/all").subscribe(
          result => {
            this.requests = result
            //console.log(result)
            this.httpClient.get<any[]>("http://localhost:8080/personnes").subscribe(
              result =>{
                this.requests = this.requests.map(demande => {
                  const personneId = demande.client.personneId;
                  this.matchedPersonne = result.find(personne => personne.idPersonne === personneId);
                
                  return {
                    ...demande,
                    client: {
                      ...demande.client,
                      nom: this.matchedPersonne.nom,
                      prenom: this.matchedPersonne.prenom
                    }
                  };
                  console.log(this.requests)
                });
                //this.requests = result
                this.httpClient.get<any[]>("http://localhost:8080/api/rapport/all").subscribe(
                result => {
                  for (let i = 0; i < this.requests.length; i++) {
                    const firstObj = this.requests[i];
                    const idDemande = firstObj.idDemande;
                  
                    // Find the matching objects of the second type based on idDemande
                    const matchingSecondObjs = result.filter(obj => obj.idDemande === idDemande);
                  
                    // Add the "rapports" attribute to the first type object and assign the matching second objects
                    firstObj.rapports = matchingSecondObjs;
                    
                  }
                this.pending = this.requests.filter(item => item.responseResponsable === "pending" && item.verSecretaire == true);
                this.progress = this.requests.filter(item => item.responseResponsable === "acceptable" 
                && item.etat === "EnCours" && item.verSecretaire == true);
                this.done = this.requests.filter(item => item.responseResponsable === "acceptable" 
                && item.etat === "Termine" && item.verSecretaire == true);
                this.declined = this.requests.filter(item => item.responseResponsable === "rejected" && item.verSecretaire == true);
                this.chosen = this.progress
                console.log(this.requests)
                })
              }
            )
            //console.log(this.requests)
          }
        
          )
  }
  else 
  this.router.navigate(['login'])
}
filter(choice : string){
  this.active = choice
  if(choice == "pending")
  this.chosen = this.pending
  if(choice == "done")
  this.chosen = this.done
  if(choice == "declined")
  this.chosen = this.declined
  if(choice == "progress")
  this.chosen = this.progress
}
navigate(lien : number){
  this.router.navigate(["requests/"+lien]);
}
}
