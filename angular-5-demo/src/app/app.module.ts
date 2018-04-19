import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatMenuModule, MatSidenavModule } from '@angular/material';
import { MatDatepickerModule, MatInputModule, MatNativeDateModule } from '@angular/material';

//Components
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { ChangeTextDirective } from'./ChangeTextDirective/change-text.directive';
import { MyServiceService } from './my-service.service';
import { FormsComponent } from './forms/forms/forms.component';
import { AnimationsComponent } from './animations/animations.component';
import { MaterialsComponent } from './materials/materials.component';
import { DatepickerComponent } from './materials/datepicker/datepicker.component';
import { TestPipePipe } from './test-pipe.pipe';


@NgModule({
  imports:      [ 
      BrowserModule,
      BrowserAnimationsModule,
      HttpModule, 
      FormsModule,
      MatButtonModule, MatMenuModule, MatSidenavModule,
      MatDatepickerModule,
      MatInputModule,
      MatNativeDateModule,
      ReactiveFormsModule,
      RouterModule.forRoot([{
        path: 'new-cmp',
        component: NewCmpComponent
      }])
  ],
  declarations: [ AppComponent, HelloComponent, NewCmpComponent, ChangeTextDirective, FormsComponent, AnimationsComponent, MaterialsComponent, DatepickerComponent, TestPipePipe ],
  bootstrap:    [ AppComponent ],
  providers: [MyServiceService]
})
export class AppModule { }
