
// 1. Escreva um algoritmo que receba 2 valores. Some os valores e mostre o resultado na tela.
function somar() {
    // 1. ENTRADA
    // Declaração das variáveis e Atribuição de valores
    const valor1 = document.getElementById('valor1').value;
    const valor2 = document.getElementById('valor2').value;

    // 2. PROCESSAMENTO
    // Cálculos e Validações
    const resultado = parseInt(valor1) + parseInt(valor2);

    // 3. SAÍDA
	// Mostra o resultado na tela
    document.getElementById('resultado1').value = resultado;
}









// 2. Escreva um algoritmo que receba 3 notas. Calcule a média das notas e mostre na tela.
function calcularMedia() {
    // 1. ENTRADA
    // Declaração das variáveis e Atribuição de valores
    const nota1 = parseInt(document.getElementById('nota1').value);
    const nota2 = parseInt(document.getElementById('nota2').value);
    const nota3 = parseInt(document.getElementById('nota3').value);

    // 2. PROCESSAMENTO
    // Cálculos e Validações
    const media = (nota1 + nota2 + nota3) / 3;

    // 3. SAÍDA
	// Mostra o resultado na tela
    document.getElementById('resultado2').value = media.toFixed(1);
}