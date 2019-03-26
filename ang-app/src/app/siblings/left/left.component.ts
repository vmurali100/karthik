import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {
  statement =" I am from Left Component"
  constructor(private commonService:CommonService) { }

  ngOnInit() {
  }
  sendData(){
    this.commonService.sendfromLeft(this.statement)
  }
}
