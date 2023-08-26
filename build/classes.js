"use strict";
//Classes
// Data modifiers - Public, private, protected 
class character {
    constructor(name, streght, skill) {
        this.name = name;
        this.streght = streght;
        this.skill = skill;
    }
    attack() {
        console.log(`${this.name} Attack with ${this.streght} points`);
    }
}
const p1 = new character('Ryu', 10, 98);
