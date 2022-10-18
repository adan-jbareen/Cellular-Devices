import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from "rxjs";
import { PrudectsService } from './prudects.service';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  baseURL: string = 'http://localhost:8000/api/';
  headers = { 'content-type': 'application/json' };

  constructor(private http: HttpClient, private prudectsService:PrudectsService , private userService:UsersService ) { this.order = []; }
  
  getCart(): Observable<any> {
    return this.http.get(this.baseURL + 'getCart');
  }

  // addToCartt(Cart: any): Observable<any> {
  //   let body = JSON.stringify(Cart);
  //   return this.http.post(this.baseURL + 'create', body, {
  //     headers: this.headers,
  //   });
  // }
  addToCartt(pro: any): Observable<any> {
    let Cart=new cart(pro.Name,pro.Price,this.userService.nameUser);
    let body = JSON.stringify(Cart);
    console.log(body);
    return this.http.post(this.baseURL + 'create', body, {
    headers: this.headers,
    });
  }
  deleteCart(Cart: any): Observable<any> {
    return this.http.delete(this.baseURL + 'deleteCart/' + Cart._id );
  }
  order: any = []
  totalPrice: number = 0;
  totalItems: number = 0;
  
  addToCart(product: any) {
    this.order.push(product);
    this.totalPrice += product.Price;
    this.totalItems++;
  }

  getOrder() {
    return this.order;
  }

  getTotalPrice() {
    return this.totalPrice;
  }

  getTotalItems() {
    return this.totalItems;
  }

  buttonPurchaseClicked() {
    for (let p of this.order) {
      this.order.pop();
    }
    this.order.pop();
    //this.order.length=0;
    this.totalPrice = 0;
    this.totalItems = 0;
  }
}

  export class cart {
    Name: String;
    Price: Number;
    nameUser : String 
    constructor(Name: String, Price: Number,nameUser: String ) {
      this.Name = Name;
      this.Price = Price;
      this.nameUser = nameUser;
    }
  }

