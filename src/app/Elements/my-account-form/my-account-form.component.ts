import { Component } from '@angular/core';

@Component({
  selector: 'app-my-account-form',
  templateUrl: './my-account-form.component.html',
  styleUrls: ['./my-account-form.component.css']
})
export class MyAccountFormComponent {
  // hnaya normalement hadi te3mer b data dyal current user b ngOnInit mhm
  user ={
    nom: 'Lamkadem',
    prenom: 'Issam',
    email: 'issam@chabiba.com',
    motDePasse: '',
    numTel:'++212618134122',
    nomEntreprise:'Nike inc.'
  }
  updateUser(){
    
  }
}
