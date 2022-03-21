// Variáveis com escopo Global
let numero1 = "";
let numero2 = "";
let operador = "";

function pegarValor(valor) {
    somTecla();

    // Verifica se o operador tem valor
    if (operador == "") {
        numero1 += valor;
        // numero1 = numero1 + valor; // o mesmo que acima
        atualizarDisplay(numero1);

    } else {
        numero2 += valor;
        atualizarDisplay(numero2);
    }
}

function pegarOperador(sinal) {
    somTecla();

    // Verifica se o primeiro valor foi informado
    if (numero1 != "") {

        // Verifica de o segundo valor foi informado
        if (numero2 == "") {
            operador = sinal;
            atualizarDisplay(numero1 + operador);
        } else {
            calcular();
        }
    }
}

function calcular() {
    let resultado = "";

    // Converte para valores numéricos
    numero1  = parseFloat(numero1);
    numero2  = parseFloat(numero2);

    // Verifica o Sinal informado
    if (operador == "+") {
        resultado = numero1 + numero2;
    
    } else if (operador == "-") {
        resultado = numero1 - numero2;
    
    } else if (operador == "*") {
        resultado = numero1 * numero2;
    
    } else if (operador == "/") {
        resultado = numero1 / numero2;
    
    } else if (operador == "%") {
        // fazer o cálculo da porcentagem
    }

    resetar();
    console.log(numero1);
    console.log(numero2);
    console.log(operador);

    numero1 = resultado;
    console.log(numero1);
    
    atualizarDisplay(resultado);
}

function verificarIgual() {
    somTecla();

    // Verifica se TODOS os campos foram preenchidos
    if (numero1 != "" && numero2 != "" && operador != "") {
        calcular();
    }
}

function resetar() {
    somTecla();
    numero1 = "";
    numero2 = "";
    operador = "";
    atualizarDisplay(0);
}

function atualizarDisplay(valor) {
    document.getElementById('display').innerHTML = valor;
}

function somTecla() {
    const blip = document.getElementById('blip');
    blip.volume = 0.5;
    blip.play();
}