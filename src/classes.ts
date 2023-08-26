class character{
    name?: string;
    streght: number;
    skill: number;

    constructor(streght:number, skill: number){
        this.streght = streght;
        this.skill = skill;
    }

    attack(): void{
        console.log(`Attack with ${this.streght} points`)
    }
}

const p1 = new character(10, 98);
console.log(p1);
p1.attack();