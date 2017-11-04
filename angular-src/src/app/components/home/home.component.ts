import { Component, OnInit } from '@angular/core';
import { RestuarantService } from '../../services/restuarant.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  restaurants: any = []; // Have to declare the variable here which I have to use in front end.

  constructor(private router: Router, private restaurantService: RestuarantService) { }

  ngOnInit() {

    this.restaurantService.getRestaurants().subscribe(restaurants => {
      this.restaurants = restaurants.restaurants[0];
      console.log(JSON.stringify(this.restaurants));
    }, err => {
      console.log(err);
      return false;
    });


  }

}
