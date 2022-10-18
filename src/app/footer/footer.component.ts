import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  NameShop: string="Cellular Device"
  tel: string ="1-700-50-62-00"
  NameStu1: string ="Adan Jbareen"
  NameStu2: string ="Fatima Badran"
  
}
