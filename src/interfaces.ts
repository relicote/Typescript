// Interfaces (type x interface)



type robot = {
    id: number | string;
    name: string;
};

const bot: robot ={
    id:1,
    name: 'Megabosta',
};

interface robot2{
    readonly id: number | string;
    name: string;
    sayHello(): string;
}

const bot2: robot2 ={
    id: 1,
    name: 'Robot',
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
};

class pessoa implements robot2{
    id: string | number;
    name: string;

    constructor(id: string | number, name: string){
        this.id = id
        this.name = name
    }
    sayHello(): string {
        return `Hello ${this.name}`;
    }
}

const p = new pessoa(1, 'Gabrielzito')
console.log(p.sayHello());