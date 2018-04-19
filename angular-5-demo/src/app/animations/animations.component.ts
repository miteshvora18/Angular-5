import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  styles:[`
      div{
         margin: 0 auto;
         text-align: center;
         width:200px;
      }
      .rotate{
         width:100px;
         height:100px;
         border:solid 1px red;
      }
   `],
   animations: [
      trigger('myanimation',[
         state('smaller',style({
            transform : 'translateY(100px)'
         })),
         state('larger',style({
            transform : 'translateY(10px)'
         })),
         transition('smaller <=> larger',animate('800ms ease-in')         )
      ])
   ]
})
export class AnimationsComponent implements OnInit {

  state: string = "smaller";
  transition: string = "smaller";
   animate() {
      this.state= this.state == 'larger' ? 'smaller' : 'larger';

   }

}