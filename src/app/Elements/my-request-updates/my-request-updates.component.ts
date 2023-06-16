import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-my-request-updates',
  templateUrl: './my-request-updates.component.html',
  styleUrls: ['./my-request-updates.component.css']
})
export class MyRequestUpdatesComponent implements OnInit{

  demande = ""
  updates : any[] = []
  constructor(private route:ActivatedRoute,private httpClient : HttpClient){}
  ngOnInit(){
    // had demande howa id li ghadi tjbed bih l updates mbe3dd ghadi tstocker l id dyal koul update f array
    if( this.route.snapshot.paramMap.get('id') != null){  
        this.demande = this.route.snapshot.paramMap.get('id') ?? "";
    }
    this.httpClient.get<any[]>("http://localhost:8080/api/rapport/getByDemandeId/"+this.demande).subscribe(
      result => {
        this.updates = result
      }
    )

  }
}
