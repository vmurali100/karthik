import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  sendDetails = new Subject()
  constructor() { }
  
  sendfromLeft(data){
    this.sendDetails.next(data)
  }
}
