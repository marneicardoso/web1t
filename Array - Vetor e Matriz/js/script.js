
// Array - Vetor e Matriz

const cores = []; // Array vazio

// Atribui um valor na primeira posição (índice 0)
cores[0] = "azul";
console.log(cores);

cores.push("verde"); // Cria uma nova posição no final do Array
console.log(cores);

cores[0] = "roxo";
console.log(cores);

cores[5] = "vermelho";
console.log(cores);

cores.push("laranja");
console.log(cores);

// Tamanho do Array
console.log(cores.length);

// Criando o Array com valores
const frutas = ["maçã", "banana", "mamão"];
console.log(frutas);

frutas.push("morango");
console.log(frutas);

// Matriz Multidimensional
const funcionarios = [
    [1579, "Maria", 52, 65.3],
    [1775, "Pedro", 43, 92.25]
];

console.log(funcionarios);

// Nome e idade da Maria
console.log("Nome: " + (funcionarios[0][1]));
console.log("Idade: " + (funcionarios[0][2]));


// Arrays e Objetos em JavaScript

// Array
const carrosArray = [
    "Palio",
    "Civic",
    "Mustang",
];

// Objeto
const carrosObjeto = {
    "Fiat": "Palio",
    "Honda": "Civic",
    "Ford": "Mustang",
};

// Buscando os valores no Array
console.log(carrosArray);
console.log(carrosObjeto);

console.log(carrosArray[2]);
console.log(carrosObjeto['Ford']);




// 1. Escreva uma algoritmo que gere números aleatórios e preencha um Array com esses números.
function preencherNumerosAleatorios() {
    // Guarda o valor informado pelo usuário
    const valorInformado = document.querySelector('#valor').
    value;

    // Cria o Array vazio
    const numeros = [];

    // Preenche o Array com números aleatórios
    for (let i = 0; i < valorInformado; i++) {
        // Gera números aleatórios (random)
        const numeroAleatorio = parseInt(Math.random() * 100);
        // const numeroAleatorio = parseFloat((Math.random() * 100).toFixed(2));
        numeros.push(numeroAleatorio);
    }

    // Mostra o resultado parcial
    console.log(numeros);

    // Altera os valores do Array com novos números aleatórios
    for (let i = 0; i < numeros.length; i++) {
        // Gera números aleatórios (random)
        const numeroAleatorio = parseInt(Math.random() * 100);
        numeros[i] = numeroAleatorio;
    }

    // Mostra o resultado final
    console.log(numeros);
}