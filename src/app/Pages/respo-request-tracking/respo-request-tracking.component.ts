import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-respo-request-tracking',
  templateUrl: './respo-request-tracking.component.html',
  styleUrls: ['./respo-request-tracking.component.css']
})
export class RespoRequestTrackingComponent {
  demande = ""
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    if( this.route.snapshot.paramMap.get('id') != null)
    this.demande = this.route.snapshot.paramMap.get('id') ?? "";
  }
}
