import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { Http, Headers, RequestOptions } from "@angular/http";

@Injectable()
export class OrderService {
  constructor(private http: Http) {}

  getOrders() {
    let headers = new Headers();
    let token = localStorage.getItem("token");
    headers.append("Authorization", "Bearer " + token);

    let options = new RequestOptions({ headers });

    return this.http.get("/api/orders", options).map((response) => {
      console.log(response.json());
      return response.json();
    });
  }
}
