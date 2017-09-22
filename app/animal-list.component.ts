import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'animal-list',
  template: `


  <ul>
    <li *ngFor="let currentAnimal of childAnimalList">
    <strong>Species: </strong> {{currentAnimal.species}}
    <br>
    <strong>Name: </strong> {{currentAnimal.name}}
    <br>
    <strong>Age: </strong> {{currentAnimal.age}}
    <br>
    <strong>Diet: </strong> {{currentAnimal.diet}}
    <br>
    <strong>Location: </strong>  {{currentAnimal.location}}
    <br>
    <strong>Caretakers: </strong> {{currentAnimal.caretakers}}
    <br>
    <strong>Sex: </strong> {{currentAnimal.sex}}
    <br>
    <strong>Likes: </strong> {{currentAnimal.likes}}
    <br>
    <strong>Dislikes: </strong> {{currentAnimal.dislikes}}
    <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button>

    <hr>
    </li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  //
  // filterByCompleteness: string = "incompleteTasks";
  //
  // onChange(optionFromMenu) {
  //   this.filterByCompleteness = optionFromMenu;
  // }
  //
  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  //
  // priorityColor(currentTask) {
  //   if(currentTask.priority === 3) {
  //     return "bg-danger";
  //   } else if (currentTask.priority === 2) {
  //     return "bg-warning";
  //   } else {
  //     return "bg-info";
  //   }
  // }
}
//
// <select (change)="onChange($event.target.value)">
//   <option value="allTasks">All Tasks</option>
//   <option value="completedTasks">Completed Tasks</option>
//   <option value="incompleteTasks" selected="selected">Incomplete Tasks</option>
// </select>

// <input *ngIf="currentTask.done === true" type="checkbox" checked (click)="toggleDone(currentTask, false)"/>
// <input *ngIf="currentTask.done === false" type="checkbox" (click)="toggleDone(currentTask, true)"/>
