import { Injectable } from '@angular/core';

@Injectable()
export class MyServiceService {

  constructor() { }
  getTodayDate(){
    let ndate = new Date();
    return ndate;
  }

  serviceProperty = "Service Created!!!";
}