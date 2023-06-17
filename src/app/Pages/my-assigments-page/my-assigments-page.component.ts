import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-assigments-page',
  templateUrl: './my-assigments-page.component.html',
  styleUrls: ['./my-assigments-page.component.css']
})
export class MyAssigmentsPageComponent {
  demande = ""
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    if( this.route.snapshot.paramMap.get('id') != null)
    this.demande = this.route.snapshot.paramMap.get('id') ?? "";
  }
}
 