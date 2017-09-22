import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe ({
  name: "filterness",
  pure: false
})

export class AgeFilterPipe implements PipeTransform {

  transform(input: Animal[], animalAgeFilter) {
    var output: Animal[] = [];
    if(animalAgeFilter === "mature") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age > 2) {
          output.push(input[i]);
        }
      }
      return output;
    }
    else if (animalAgeFilter === "young") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age <= 2) {
          output.push(input[i]);
        }
      }
      return output;
    }
    else {
      return input;
    }
  }
}
