"use strict";
// variaveis
// Tipos primitivos: boolena, number, string
let ligado = false;
let nome = 'Gabriel';
let idade = 30;
let altura = 1.6;
// Tipos Especiais: Nulo e Indefenido 
let nulo = null;
let indefinido = undefined;
// Tipos abrangentes: Any e Void
let retorno; //utilizado somente para executar e não retornar 
let retornoView = 'oi safada';
// Objeto - Sem previsibilidade 
let produto = {
    name: 'Gabriel',
    cidade: 'SP',
    idade: 24,
};
let meuProduto = {
    nome: 'Tênis',
    preco: 89.99,
    unidades: 5,
};
// Arrays
let dados = ['Gabriel', 'Felipe', 'Antonio'];
let dados2 = ['Gabriel', 'Felipe', 'Antonio'];
// Array multitipos 
let infos = ['Gabriel', 24, 'Reliquias'];
// Tuplas - Vetor de multi types com lugares definidos para cada tipo
let boleto = ['agua conta', 199.90, 3132312];
// arrays métodos
dados.pop();
// Datas
let aniversario = new Date('2022-12-01 05:00');
// console.log(aniversario.toString());
console.log(dados);
