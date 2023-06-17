import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-request-validate-page',
  templateUrl: './my-request-validate-page.component.html',
  styleUrls: ['./my-request-validate-page.component.css']
})
export class MyRequestValidatePageComponent implements OnInit {
  demande = ""
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    if( this.route.snapshot.paramMap.get('id') != null)
    this.demande = this.route.snapshot.paramMap.get('id') ?? "";
  }

}
 