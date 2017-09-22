import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AnimalListComponent } from './animal-list.component';
import { NewAnimalComponent } from './new-animal.component';
// import { EditTaskComponent } from './edit-task.component';
// import { CompletenessPipe } from './completeness.pipe';

@NgModule ({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, AnimalListComponent, NewAnimalComponent ],
  bootstrap: [ AppComponent ]
  //boostrap refers to launchin an application with min required resources (NOT bootstrap stylesheet)
})

export class AppModule { }
