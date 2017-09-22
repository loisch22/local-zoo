import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
    <h1 class="form-title">New Animal</h1>
    <div class="container">
      <form role="form">
        <div class="form-group col-xs-10 col-sm-4 col-md-4 col-lg-4">
          <label>Animal Species:</label>
          <input class="form-control" #newSpecies require>
        </div>
        <div class="form-group col-xs-10 col-sm-4 col-md-4 col-lg-4">
          <label>Animal Name:</label>
          <input class="form-control" #newName require>
        </div>
        <div class="form-group col-xs-10 col-sm-4 col-md-4 col-lg-4">
          <label>Animal Age:</label>
          <input class="form-control" #newAge require>
        </div>
        <div class="form-group col-xs-10 col-sm-4 col-md-4 col-lg-4">
          <label>Animal Diet:</label>
          <input class="form-control" #newDiet require>
        </div>
        <div class="form-group col-xs-10 col-sm-4 col-md-4 col-lg-4">
          <label>Animal Location:</label>
          <input class="form-control" #newLocation require>
        </div>
        <div class="form-group col-xs-10 col-sm-4 col-md-4 col-lg-4">
          <label>Animal Caretakers:</label>
          <input class="form-control" #newCaretakers require>
        </div>
        <div class="form-group col-xs-10 col-sm-4 col-md-4 col-lg-4">
          <label>Animal Sex:</label>
          <input class="form-control" #newSex require>
        </div>
        <div class="form-group col-xs-10 col-sm-4 col-md-4 col-lg-4">
          <label>Animal Likes:</label>
          <input class="form-control" #newLikes>
        </div>
        <div class="form-group col-xs-10 col-sm-4 col-md-4 col-lg-4">
          <label>Animal Dislikes:</label>
          <input class="form-control" #newDislikes>
          
          <button class="btn btn-default add-btn"(click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';">Add</button>
        </div>
      </form>
    </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
