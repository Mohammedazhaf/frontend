import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dashboard-updates',
  templateUrl: './dashboard-updates.component.html',
  styleUrls: ['./dashboard-updates.component.css']
})
export class DashboardUpdatesComponent implements OnInit{
  constructor(private httpClient : HttpClient){}
  updates : any[] = []
  ngOnInit() {
    this.httpClient.get<any[]>("http://www.mohammedazhaf.me:8080/api/rapport/all").subscribe(
      result => {
        for (let i = 0; i < result.length; i++) {
          if(i<10)
          this.updates[i] = result[i];
          else 
          break
        }
      }
    )
  }
}
