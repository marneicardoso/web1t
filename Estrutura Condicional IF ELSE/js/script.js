// 1. Algoritmo para verificar a idade informada.
function verificarIdade() {
    const idade = document.getElementById('idade').value;
    
    if (idade >= 18) {
        document.getElementById('resultado1').innerHTML = "Maior";
    
    } else {
        document.getElementById('resultado1').innerHTML = "Menor";
    }
}
        






// 2. Algoritmo para verificar se um número é Par, Ímpar ou Zero.
function verificarParImpar() {
    const valor = document.getElementById('valor').value;

    if (valor == 0) {
        document.getElementById('resultado2').innerHTML = "Zero";
    
    } else if (valor % 2 == 0) {
        document.getElementById('resultado2').innerHTML = "Par";
    
    } else {
        document.getElementById('resultado2').innerHTML = "Ímpar";
    }
}
