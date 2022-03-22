
// 1. Enquanto o valor for menor que 5, mostre o valor na tela.
function contadorWhile1() {
    // Cria o contador fora do bloco while
    let contador = 1;

    // Enquanto o valor do contador for menor que 5
    while (contador <= 5) {
        // Interpolação (Texto + variáveis)
        document.getElementById('contadorWhile1').innerHTML += `<br>${contador}`;

        // Concatenação (Texto + variáveis)
        // document.getElementById('contadorWhile1').innerHTML += "<br>" + contador;

        // Incrementa o contador (dentro do bloco)
        contador++;
        // contador += 1;
        // contador = contador + 1;
    }
}


// 2. Receba um valor e enquanto o contador for menor que o valor informado, mostre o contador na tela.
function contadorWhile2() {
    // Cria o contador fora do bloco while
    let contador = 1;

    // Valor informado pelo usuário
    const valor = document.getElementById('valorInformado').value;

    // Enquanto o valor do contador for menor que 5
    while (contador <= valor) {
        // Interpolação (Texto + variáveis)
        document.getElementById('contadorWhile2').innerHTML += `<br>${contador}`;

        // Incrementa o contador (dentro do bloco)
        contador++;
    }
}





// 1. Enquanto o valor for menor que 5, mostre o valor na tela.
function contadorFor1() {

    for (let contador = 1; contador <= 5; contador++) {
        document.getElementById('contadorFor1').innerHTML += `<br>${contador}`;        
    }
}