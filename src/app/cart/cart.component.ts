import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { PrudectsService } from '../prudects.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  //[x: string]: any;
  addToCart : any = []
  totalPrice : number = 0;
  totalItems : number = 0;
  Products: any=[]
  
  constructor(private usersService: UsersService, private cartService: CartService , private activeRoute: ActivatedRoute ) {this.addToCart=[]; }

  ngOnInit(): void {
    // this.addToCart = this.cartService.getOrder();
    // this.totalPrice=this.cartService.getTotalPrice();
    // this.totalItems=this.cartService.getTotalItems();
    this.getCartt();
  }

  getCartt(){
    this.cartService.getCart().subscribe((cartsData:any[]) =>{
      for (var i of cartsData){
        console.log(i);
        if(i.nameUser==this.usersService.nameUser){
          this.addToCart.push(i);
          this.totalItems++;
          this.totalPrice+=i.Price;
        }
      }
    });
  }

  deletepro(){
    for (var i of this.addToCart){
      this.cartService.deleteCart(i).subscribe();
    }
    this.addToCart=[];
    this.totalItems=0;
    this.totalPrice=0;
  }

  // clear(){
  //   this.totalPrice=0;
  //   this.totalItems=0;
  //   this.cartService.buttonPurchaseClicked();
  //   window.alert("products removed succesfully");
  // }
}