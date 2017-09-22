import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div class="container">
          <div *ngIf="childSelectedAnimal">
          <h3 class="form-title">Edit {{childSelectedAnimal.name}}</h3>
          <div class="form-group col-xs-10 col-sm-4 col-md-4 col-lg-4">
            <label>Enter Animal Species:</label>
            <input class="form-control" [(ngModel)]="childSelectedAnimal.species" require>
          </div>
          <div class="form-group col-xs-10 col-sm-4 col-md-4 col-lg-4">
            <label>Enter Animal Name:</label>
            <input class="form-control" [(ngModel)]="childSelectedAnimal.name" require>
          </div>
          <div class="form-group col-xs-10 col-sm-4 col-md-4 col-lg-4">
            <label>Enter Animal Age:</label>
            <input class="form-control"  [(ngModel)]="childSelectedAnimal.age" require>
          </div>
          <div class="form-group col-xs-10 col-sm-4 col-md-4 col-lg-4">
            <label>Enter Animal Diet:</label>
            <input class="form-control"  [(ngModel)]="childSelectedAnimal.diet" require>
          </div>
          <div class="form-group col-xs-10 col-sm-4 col-md-4 col-lg-4">
            <label>Enter Animal Location:</label>
            <input class="form-control" [(ngModel)]="childSelectedAnimal.location" require>
          </div>
          <div class="form-group col-xs-10 col-sm-4 col-md-4 col-lg-4">
            <label>Enter Animal Caretakers:</label>
            <input class="form-control" [(ngModel)]="childSelectedAnimal.caretakers" require>
          </div>
          <div class="form-group col-xs-10 col-sm-4 col-md-4 col-lg-4">
            <label>Enter Animal Sex:</label>
            <input class="form-control" [(ngModel)]="childSelectedAnimal.sex" require>
          </div>
          <div class="form-group col-xs-10 col-sm-4 col-md-4 col-lg-4">
            <label>Enter Animal Likes:</label>
            <input class="form-control" [(ngModel)]="childSelectedAnimal.likes">
          </div>
          <div class="form-group col-xs-10 col-sm-4 col-md-4 col-lg-4">
            <label>Enter Animal Dislikes:</label>
            <input class="form-control" [(ngModel)]="childSelectedAnimal.dislikes">

            <button class="btn btn-default done-btn" (click)="doneButtonClicked()">Done</button>
          </div>
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
