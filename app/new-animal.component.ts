import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
    <h1>New Animal</h1>
    <div>
      <form class="form-group">
        <label>Animal Species:</label>
        <input class="form-control" #newSpecies require>
        <label>Animal Name:</label>
        <input class="form-control" #newName require>
        <label>Animal Age:</label>
        <input class="form-control" #newAge require>
        <label>Animal Diet:</label>
        <input class="form-control" #newDiet require>
        <label>Animal Location:</label>
        <input class="form-control" #newLocation require>
        <label>Animal Caretakers:</label>
        <input class="form-control" #newCaretakers require>
        <label>Animal Sex:</label>
        <input class="form-control"  #newSex require>
        <label>Animal Likes:</label>
        <input class="form-control" #newLikes>
        <label>Animal Dislikes:</label>
        <input class="form-control" #newDislikes>

        <button (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';">Add</button>
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
