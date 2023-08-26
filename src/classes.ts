//Classes

// Data modifiers - Public, private, protected 


class Character{
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

//Charachter: superclass
//Magician: subclass (por herdar outra classe)
class Magician extends Character{
    magicPoints: number
    constructor(name: string, streght:number, skill: number, magicPoints: number){
        super(name, streght, skill)
        this.magicPoints = magicPoints;
    }
}

const p1 = new Character('Ryu', 10, 98);
const p2 = new Magician('Mago', 9, 30, 100);

console.log(Magician);
