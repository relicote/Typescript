"use strict";
// Interfaces (type x interface)
const bot = {
    id: 1,
    name: 'Megabosta',
};
const bot2 = {
    id: 1,
    name: 'Robot',
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
class pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `Hello ${this.name}`;
    }
}
const p = new pessoa(1, 'Gabrielzito');
console.log(p.sayHello());
