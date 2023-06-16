import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-demande-tracking-page',
  templateUrl: './demande-tracking-page.component.html',
  styleUrls: ['./demande-tracking-page.component.css']
})
export class DemandeTrackingPageComponent implements OnInit{
    demande = ""
    constructor(private route: ActivatedRoute) { }
    ngOnInit() {
      if( this.route.snapshot.paramMap.get('id') != null)
      this.demande = this.route.snapshot.paramMap.get('id') ?? "";
    }

}
