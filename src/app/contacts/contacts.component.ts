import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name1:string="Adan Jbareen"
  address1:string="Um-alfahem"
  email1:string="adan.jbaren.99@gmail.com"
  id1:number=206681553
  
  name2:string="Fatima Badran"
  address2:string="Bine"
  email2:string="fatme.b1999@gmail.com"
  id2:number=207659384


}
