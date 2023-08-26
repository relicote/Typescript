"use strict";
class character {
    constructor(streght, skill) {
        this.streght = streght;
        this.skill = skill;
    }
    attack() {
        console.log(`Ataque com ${this.streght} pontos`);
    }
}
const p1 = new character(10, 98);
console.log(p1);
p1.attack();
