import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  heading ={info:" Hello I am from Child"}
  @Output() statement = new EventEmitter()
  constructor() { }

  ngOnInit() {
  
  }
  sendData(){
    this.statement.emit(this.heading)
  }
}
