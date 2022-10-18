import { Component, OnInit ,ViewChild } from '@angular/core';
import { CatagoriesPrudComponent } from '../catagories-prud/catagories-prud.component';
import { PrudectsService } from '../prudects.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-prudects',
  templateUrl: './prudects.component.html',
  styleUrls: ['./prudects.component.css']
})
export class PrudectsComponent implements OnInit {
  constructor(private prudectsService:PrudectsService,private CartService: CartService ) { }
  @ViewChild(CatagoriesPrudComponent) category: CatagoriesPrudComponent;
  ngOnInit(): void {
  }
  addToCart(product : any){
    this.CartService.addToCartt(product);
    window.alert("the product added to card");
  }

  }
