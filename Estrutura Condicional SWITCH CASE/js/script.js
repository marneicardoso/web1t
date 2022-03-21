
function mostrarValor() {
    const valor = parseInt(document.getElementById('valorInformado').value);
    let valorPorExtenso = "";

    switch (valor) {
        case 0:
            valorPorExtenso = "Zero";
            break;

        case 1:
            valorPorExtenso = "Um";
            break;

        case 2:
            valorPorExtenso = "Dois";
            break;
            
        case 3:
            valorPorExtenso = "Três";
            break;
            
        case 4:
            valorPorExtenso = "Quatro";
            break;
            
        case 5:
            valorPorExtenso = "Cinco";
            break;
        
        default:
            valorPorExtenso = "Informe um valor entre 0 e 5";
    }

    /*if (valor == 0) {
        valorPorExtenso = "Zero";
    } else if (valor == 1) {
        valorPorExtenso = "Um";
    } else if (valor == 2) {
        valorPorExtenso = "Dois";
    } else if (valor == 3) {
        valorPorExtenso = "Três";
    } else if (valor == 4) {
    valorPorExtenso = "Quatro";
    } else if (valor == 5) {
        valorPorExtenso = "Cinco";
    } else {
        valorPorExtenso = "Informe um valor entre 0 e 5";
    }*/

    // Mostrar o resultado
    document.getElementById('resultado').innerHTML = valorPorExtenso;
}

function mostrarRegiao() {
    const regiao = document.getElementById('regiao').value;
    let nomeRegiao = "";

    switch (regiao) {
        case "1":
            nomeRegiao = "Sul";
            break;

        case "2":
            nomeRegiao = "Sudeste";
            break;

        case "3":
            nomeRegiao = "Centro-Oeste";
            break;

        case "4":
            nomeRegiao = "Norte";
            break;

        case "5":
            nomeRegiao = "Nordeste";
            break;

        default:
            nomeRegiao = "Informe uma das regiões";
    }

    document.getElementById('resultado2').innerHTML = nomeRegiao;
}