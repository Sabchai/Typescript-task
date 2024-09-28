"use strict";
class Animal {
    constructor(Name, Age) {
        this.Name = Name;
        this.Age = Age;
    }
    speak() {
        console.log("It makes noise");
    }
}
//2nd part 
const chien = new Animal('Noel', 10);
chien.speak();
function AnimalFilter(mascotas, ageMin, ageMax) {
    return mascotas.filter(animal => animal.Age >= ageMin && animal.Age <= ageMax);
}
const mascotas = [
    { Name: 'Oreo', Age: 3 },
    { Name: 'Kalsita', Age: 8 },
    { Name: 'Noel', Age: 9 },
];
console.log(AnimalFilter(mascotas, 3, 8));
//# sourceMappingURL=monFichier.js.map