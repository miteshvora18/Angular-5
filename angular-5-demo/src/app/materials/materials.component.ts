import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {
  myData: Array<any>;
  constructor() { }

  ngOnInit() {
  }

  fnFile(event){
    alert(2);
  }

}