import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-work-slider',
  templateUrl: './work-slider.component.html',
  styleUrls: ['./work-slider.component.css']
})
export class WorkSliderComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    margin: 18,
    navText: ['<button type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button>', 
    '<button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }
}
