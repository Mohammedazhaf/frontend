import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-respo-view-request',
  templateUrl: './respo-view-request.component.html',
  styleUrls: ['./respo-view-request.component.css']
})
export class RespoViewRequestComponent implements OnInit{
  demande = ""
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    if( this.route.snapshot.paramMap.get('id') != null)
    this.demande = this.route.snapshot.paramMap.get('id') ?? "";
  }

}
