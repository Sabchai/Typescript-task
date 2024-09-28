//1st part
interface MyAnimal {
    Name: string;
    Age: number;
}

class Animal implements MyAnimal {
    Name: string;
    Age: number;

    constructor(Name: string, Age: number) {
        this.Name = Name;
        this.Age = Age;
    }

    speak(): void {
        console.log("It makes noise");
    }
}
//2nd part 
const chien = new Animal('Noel', 10);
chien.speak();

function AnimalFilter<T extends MyAnimal>(mascotas: T[], ageMin: number, ageMax: number): T[] {
    return mascotas.filter(animal => animal.Age >= ageMin && animal.Age <= ageMax);
}

const mascotas: MyAnimal[] = [
    { Name: 'Oreo', Age: 3 },
    { Name: 'Kalsita', Age: 8 },
    { Name: 'Noel', Age: 9 },
];

console.log(AnimalFilter(mascotas, 3, 8));

//mascotas: T[]: un tableau d'objets de type T 
/*function AnimalFilter<T extends MyAnimal>: la fonction AnimalFilter peut travailler avec n'importe quel type 
puisque c'est generique et va heriter les données de Animal*/

//Task: 
//Créez une classe Animal avec des propriétés comme name et age, et une méthode speak.
//Utilisez une interface pour garantir que tout Animal a un name.
//Créez une fonction générique pour obtenir un tableau d'animaux et les filtrer par âge.
//Utilisez async/await pour simuler une API qui renvoie la liste des animaux.