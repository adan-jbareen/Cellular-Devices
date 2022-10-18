import { Component, OnInit } from '@angular/core';
import { PrudectsService } from '../prudects.service';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Products: any=[]
  constructor(private prudectsService:PrudectsService , private router: Router,private cartService: CartService ) { }
  ngOnInit(): void {
    //this.Products = this.prudectsService.getPrudects()
    this.prudectsService.getProduct().subscribe((productsData:any[]) =>{
      this.Products=productsData;
    });

  }
  addToCart(product : any){
    this.cartService.addToCartt(product).subscribe();
    window.alert("product added to card");
  }
  }
