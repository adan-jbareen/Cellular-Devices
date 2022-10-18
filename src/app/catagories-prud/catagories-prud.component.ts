import { Component, OnInit } from '@angular/core';
import { PrudectsService } from '../prudects.service';

@Component({
  selector: 'app-catagories-prud',
  templateUrl: './catagories-prud.component.html',
  styleUrls: ['./catagories-prud.component.css']
})
export class CatagoriesPrudComponent implements OnInit {
  constructor(private prudectsService:PrudectsService ) { }
  
  category=[
    {Name:"Samsung"},
    {Name:"Apple"},
    {Name:"Xiaomi"},
    {Name:"LG"},
    {Name:"Huawei"},
  ];

  products:any=[];

  selectedCategory:string=""
  showCategoryComponent: boolean=false

  ngOnInit():void{
    //this.products=this.prudectsService.getPrudects();
    this.prudectsService.getProduct().subscribe((productsData:any[]) =>{
      this.products=productsData;
    });
  };


  showSamsung(){
    this.selectedCategory="Samsung"
    this.showCategoryComponent=true
  }
  showApple(){
    this.selectedCategory="Apple"
    this.showCategoryComponent=true
  }
  showXiaomi(){
    this.selectedCategory="Xiaomi"
    this.showCategoryComponent=true
  
    }
    showLG(){
      this.selectedCategory="LG"
      this.showCategoryComponent=true
    }
    showHuawei(){
      this.selectedCategory="Huawei"
      this.showCategoryComponent=true
    }

}
