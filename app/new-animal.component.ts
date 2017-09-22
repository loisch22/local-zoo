import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
    <h1>New Animal</h1>
    <div>
      <label>Animal Species:</label>
      <input #newSpecies require>
      <label>Animal Name:</label>
      <input #newName require>
      <label>Animal Age:</label>
      <input #newAge require>
      <label>Animal Diet:</label>
      <input #newDiet require>
      <label>Animal Location:</label>
      <input #newLocation require>
      <label>Animal Caretakers:</label>
      <input #newCaretakers require>
      <label>Animal Sex:</label>
      <input #newSex require>
      <label>Animal Likes:</label>
      <input #newLikes>
      <label>Animal Dislikes:</label>
      <input #newDislikes>

      <button (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newDescription.value='';">Add</button>
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
