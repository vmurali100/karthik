import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  @Input() revceivable;
  constructor() {
    console.log("I am first triggering")
   }

  ngOnInit() {
    // console.log(this.revceivable);
    console.log("I am Second Triggering")
  }

}
