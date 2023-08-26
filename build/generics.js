"use strict";
//Generics
function concatArray(...itens) {
    return Array().concat(...itens);
}
const numArray = concatArray([1, 5], [3]);
const stgArray = concatArray(['Gabriel', 'Ronaldo'], ['Kaka']);
numArray.push('Salve veinho');
console.log(numArray);
console.log(stgArray);
