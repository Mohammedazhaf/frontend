import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-projects',
  templateUrl: './dashboard-projects.component.html',
  styleUrls: ['./dashboard-projects.component.css']
})
export class DashboardProjectsComponent implements OnInit{
  tday = ""; // Assign an initial value here

  ngOnInit() {
    this.tday="gg"
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.toLocaleString('default', { month: 'long' });
    var year = currentDate.getFullYear();
    var suffix  = ""
    if (day >= 11 && day <= 13) {
      suffix = "th";
    }
    switch (day % 10) {
      case 1:
        suffix = "st";
        break;
      case 2:
        suffix = "nd";
        break;
      case 3:
        suffix = "rd";
        break;
      default:
        suffix = "th";
        break;
    }
    this.tday = month + " " + day + suffix + ", " + year;
    console.log(this.tday);
  }


}
