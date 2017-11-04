import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  clickMessage = "You clicked the button ";
  click = 0;
  fullMessage;
  constructor() {
  }

  myClick() {
    this.click++;
    this.fullMessage = this.clickMessage + this.click + " times";
  }
  ngOnInit() {
  }

}
