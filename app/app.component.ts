import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Animals you can visit at our zoo on {{month}}/{{day}}/{{year}}</h1>
    <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
    <hr>

    <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>

  </div>
  `
})
//*ngFor = Angular's repeater directive

//below is the class def: defines how it behaves
export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedAnimal = null;

  masterAnimalList: Animal[] = [
    new Animal('Artic Fox', 'Moon', 2, 'Carnivore', 'Northern Trail', 5, 'female', 'Cool shade', 'Loud noises'),
    new Animal('Ocelot', 'Prince', 4, 'Carnivore', 'Tropical Rain Forest', 6, 'male', 'Laying in the sunshine', 'Toys that are not rope-based'),
    new Animal('Northwest Black Tailed Deer', 'Tinkerbell', 8, 'Herbivore', 'Norther Trail', 2, 'female', 'Delicate roots and leaves', 'Loud noises')
  ];

  // editTask(clickedTask) {
  //   this.selectedTask = clickedTask;
  // }
  //
  // finishedEditing() {
  //   this.selectedTask = null;
  // }
  //
  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }
}
//
//
// <edit-task [childSelectedTask]="selectedTask" (doneButtonClickedSender)="finishedEditing()"></edit-task>
// <new-task (newTaskSender)="addTask($event)"></new-task>
