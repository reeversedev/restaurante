import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RestuarantService {

  constructor(private http: Http) { }
  getRestaurants() {
    let headers = new Headers;
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/restaurants', { headers: headers }).map(res => res.json());
  }

}
