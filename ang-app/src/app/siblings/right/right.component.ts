import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {
  receiveble ;
  constructor(private common:CommonService) { }

  ngOnInit() {
    this.common.sendDetails.subscribe(data=>{
      this.receiveble = data;
    })
  }

}
