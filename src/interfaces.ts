// Interfaces (type x interface)


interface robot2{
    readonly id: number | string;
    name: string;
}

const bot2: robot2 ={
    id:1,
    name: 'Robot',
};

type robot = {
    id: number | string;
    name: string;
};

const bot: robot ={
    id:1,
    name: 'Megabosta',
};

console.log(bot);
console.log(bot2);