//Classes

// Data modifiers - Public, private, protected


class character{
    protected name?: string;
    streght: number;
    skill: number;

    constructor(name: string, streght:number, skill: number){
        this.name = name;
        this.streght = streght;
        this.skill = skill;
    }

    attack(): void{
        console.log(`${this.name} Attack with ${this.streght} points`)
    }
}

const p1 = new character('Ryu', 10, 98);
console.log(p1);
p1.attack();