import { Component, Input, OnInit } from '@angular/core';
import { PrudectsService } from '../prudects.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {
  @Input() selectedCategory:string
  Products: any=[]
  ProductsInCart:string
  constructor(private prudectsService:PrudectsService,private cartService: CartService ) { }
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

