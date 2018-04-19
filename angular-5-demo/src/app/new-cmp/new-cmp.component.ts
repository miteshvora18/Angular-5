import { Component, OnInit } from '@angular/core'; // here angular/core is imported .

@Component({
  // this is a declarator which starts with @ sign. The component word marked in bold needs to be the same.
  selector: 'app-new-cmp', //
  templateUrl: './new-cmp.component.html',
  // reference to the html file created in the new component.
  styleUrls: ['./new-cmp.component.css'] // reference to the style file.
})

export class NewCmpComponent implements OnInit {
  title = 'Angular 4 Project!';
  // declared array of months.
  months = ["January", "Feburary", "March", "April", "May",
    "June", "July", "August", "September",
    "October", "November", "December"];

  changeMonths(event) {
    console.log("Month changed for dropdown");
  }

  myClickFunction(event){
    alert('Clicked me');
  }

  constructor() { }
  ngOnInit() { }

  onClickSubmit(data) {
      alert("Entered Email id : " + data.emailid+ " ," + "Entered Password: " + data.passwd);
   }
}