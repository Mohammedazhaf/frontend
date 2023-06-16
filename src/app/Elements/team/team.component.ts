import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 500,
    autoplay: true,
    margin: 18,
    responsive: {
      0: {
        slideBy:1,
        items: 1
      },
      400: {
        slideBy:1,
        items: 1
      },
      740: {
        slideBy:3,
        items: 3
      },
      940: {
        slideBy:3,
        items: 3
      }
    },
    nav: false
  }
}
