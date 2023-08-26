//Classes

// Data modifiers - Public, private, protected 


class character{
    protected name?: string;
    readonly streght: number;
    skill: number;

    constructor(name: string, streght:number, skill: number){
        this.name = name;
        this.streght = streght;
        this.skill = skill;
    }

    protected attack(): void{
        console.log(`${this.name} Attack with ${this.streght} points`)
    }
}

const p1 = new character('Ryu', 10, 98);
p1.skill = 12
