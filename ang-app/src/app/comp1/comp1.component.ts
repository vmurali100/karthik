import { Component, OnInit } from '@angular/core';

interface myObj {
  fname:String;
  lname:String
}
@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  myName : any ={
    "fname": "Khosrow",
    "lname": 23,
   }
  constructor() { }

  ngOnInit() {
  }

  sayHello(){
    this.myName.fname ="Ram"
  }

}
