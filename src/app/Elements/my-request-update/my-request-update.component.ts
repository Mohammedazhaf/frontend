import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-my-request-update',
  templateUrl: './my-request-update.component.html',
  styleUrls: ['./my-request-update.component.css']
})
export class MyRequestUpdateComponent {
@Input() employee = ""
@Input() title = ""
@Input() description = ""
@Input() date = ""
@Input() file = ""
@Input() pic = ""
}
