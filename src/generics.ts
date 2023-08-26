//Generics
function concatArray<T>(...itens: T[]): T[]{
    return Array().concat(...itens);
}

const numArray = concatArray<number[]>([1,5],[3]);
const stgArray = concatArray<string[]>(['Gabriel', 'Ronaldo'], ['Kaka']);

numArray.push('Salve veinho');

console.log(numArray);
console.log(stgArray);