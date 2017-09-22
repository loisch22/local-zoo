# _Local Zoo_

#### _An application that helps keep track of the animals. September 22, 2017_

#### By _**Lois Choi**_

## Description

_This application allows users to add keep track of their zoo animals. They can use this application to add a newly-admitted animal, view all listed animals, view animals based on filters, and edit the animals name, age or caretaker._

## User Story Specifications (BDD)
_1. Download github repository: <a>https://github.com/loisch22/local-zoo</a>_

## User Story Specifications (BDD)

| Behavior | Input | Output |
| :---         |     :---:      |          ---: |
| 1. User can add newly-admitted animal | `click` Add new animal | New animal is added to list of all animals |
| 2. User can view all animals at the zoo | `view all` | All animals are listed out |
| 3. Filter search by: age (less than 2) or mature (older than 2) | `click` Young OR `click` Mature | View `young` OR View `mature` |
| 4. User can edit the animals name, age, or caretake | `click` Edit | Form to edit animal information then return to view updated animal information |


## Exentensions/Wish list

| Description |
| :---         |   
| 1. Extend the functionality of the app by building out the animal model to further enhance the app. |
| 2. Add custom SASS styling with corresponding Gulp tasks to compile. |
| 3. Display of the total number of caretakers needed in a day.
| 4. Add a property that records when each animal was admitted. The user could enter a date and time, or the app can generate a timestamp.|
| 5. Expand the application to differentiate between animals' species. Group the animals into those categories. Then include a component to display the total needed caretakers for whichever species the user selects.|
| 6. Add a new master component to average the total age for each species.
|
| 7. Show animals based on diet type. Then, show all animals who eat meat (carnivores AND omnivores)
|
| 8. Show image of animals with each species
|

## Known Bugs

_No known bugs._


## Technologies Used

_Angular, JavaScript, gulp_

### License

*MIT License*

Copyright (c) 2017 **_Lois Choi_**
