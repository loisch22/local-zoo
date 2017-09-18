import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule ({
  imports: [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
  //boostrap refers to launchin an application with min required resources (NOT bootstrap stylesheet)
})

export class AppModule { }
