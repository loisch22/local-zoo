import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div>
        <div *ngIf="childSelectedAnimal">
          <h3>Edit {{childSelectedAnimal.name}}</h3>
          <label>Enter Animal Species:</label>
          <input [(ngModel)]="childSelectedAnimal.species" require>
          <label>Enter Animal Name:</label>
          <input [(ngModel)]="childSelectedAnimal.name" require>
          <label>Enter Animal Age:</label>
          <input [(ngModel)]="childSelectedAnimal.age" require>
          <label>Enter Animal Diet:</label>
          <input [(ngModel)]="childSelectedAnimal.diet" require>
          <label>Enter Animal Location:</label>
          <input [(ngModel)]="childSelectedAnimal.location" require>
          <label>Enter Animal Caretakers:</label>
          <input [(ngModel)]="childSelectedAnimal.caretakers" require>
          <label>Enter Animal Sex:</label>
          <input [(ngModel)]="childSelectedAnimal.sex" require>
          <label>Enter Animal Likes:</label>
          <input [(ngModel)]="childSelectedAnimal.likes">
          <label>Enter Animal Dislikes:</label>
          <input [(ngModel)]="childSelectedAnimal.dislikes">
          <button (click)="doneButtonClicked()">Done</button>
        </div>
      </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
