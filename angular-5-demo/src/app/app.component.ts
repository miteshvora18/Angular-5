import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {MyServiceService} from './my-service.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'hi ';
  title = "welcome!!"

  todaydate ;
  serviceProperty;
  // constructor(private myservice : MyServiceService){

  // }

  constructor(private http: Http) { }
  page;

  ngOnInit(){
    //this.todaydate = this.myservice.getTodayDate();
    //this.serviceProperty = this.myservice.serviceProperty;
    
    //log data
    // this.http.get("https://api.myjson.com/bins/iyhcz").
    //   map((response) => response.json()).
    //   subscribe((test) => console.log(test))

    this.http.get("https://api.myjson.com/bins/iyhcz").
      map((response) => response.json()).
      subscribe((test) => this.page = test.page)
    }
  
  
}

