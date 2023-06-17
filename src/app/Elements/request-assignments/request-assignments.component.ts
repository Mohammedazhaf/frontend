import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-request-assignments',
  templateUrl: './request-assignments.component.html',
  styleUrls: ['./request-assignments.component.css']
})
export class RequestAssignmentsComponent implements OnInit{
  @Input() req = ""
  demande = ""
  assignments : any[] = []
  employees : any[] = []
  add = false
  constructor(private route:ActivatedRoute,private httpClient : HttpClient){}
  ngOnInit(){
    // had demande howa id li ghadi tjbed bih l updates mbe3dd ghadi tstocker l id dyal koul update f array
    if( this.route.snapshot.paramMap.get('id') != null){  
        this.demande = this.route.snapshot.paramMap.get('id') ?? "";
    }
    if(this.req!="")
      this.demande=this.req
    this.httpClient.get<any[]>("http://www.mohammedazhaf.me:8080/api/affectation/all").subscribe(
      result => {
        this.assignments = result
        this.assignments = this.assignments.filter(item => item.idDemande == this.demande)
        this.httpClient.get<any[]>("")
      }
    )
  }
  removeAssignment(id : number){
    this.httpClient.delete("http://www.mohammedazhaf.me:8080/api/affectation/delete/"+id).subscribe(
    result => {
      console.log("deleted");
      this.ngOnInit()
    }
  )
  }
  updateAdd(){
    this.add = !this.add
  }
}
