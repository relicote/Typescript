// variaveis

// Tipos primitivos: boolena, number, string

    let ligado: boolean = false;
    let nome: string = 'Gabriel';
    let idade: number = 30;
    let altura: number = 1.6;

// Tipos Especiais: Nulo e Indefenido 
    let nulo: null = null;
    let indefinido: undefined = undefined;

// Tipos abrangentes: Any e Void
    let retorno: void; //utilizado somente para executar e não retornar 
    let retornoView: any = 'oi safada';

// Objeto - Sem previsibilidade 
    let produto:object = {
        name: 'Gabriel',
        cidade: 'SP',
        idade: 24,
    };

// Objeto tipado - Com previsibilidade 
    type ProdutoLoja ={
        nome: string;
        preco: number;
        unidades: number;
    }

    let meuProduto: ProdutoLoja ={
         nome: 'Tênis',
         preco: 89.99,
         unidades: 5,
    }

// Arrays
    let dados: string[] = ['Gabriel', 'Felipe', 'Antonio'];
    let dados2: Array<string> = ['Gabriel', 'Felipe', 'Antonio'];

// Array multitipos 
    let infos: (string | number)[] = ['Gabriel', 24, 'Reliquias'];

// Tuplas - Vetor de multi types com lugares definidos para cada tipo
    let boleto:[string, number, number] = ['agua conta', 199.90, 3132312];

// arrays métodos
    dados.pop();

// Datas
    let aniversario:Date = new Date('2022-12-01 05:00')
    console.log(aniversario.toString());