"use strict";
//Classes
// Data modifiers - Public, private, protected 
class Character {
    constructor(name, streght, skill) {
        this.name = name;
        this.streght = streght;
        this.skill = skill;
    }
    attack() {
        console.log(`${this.name} Attack with ${this.streght} points`);
    }
}
//Charachter: superclass
//Magician: subclass (por herdar outra classe)
class Magician extends Character {
    constructor(name, streght, skill, magicPoints) {
        super(name, streght, skill);
        this.magicPoints = magicPoints;
    }
}
const p1 = new Character('Ryu', 10, 98);
const p2 = new Magician('Mago', 9, 30, 100);
console.log(Magician);
