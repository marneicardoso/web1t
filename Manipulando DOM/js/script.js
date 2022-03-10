// alert("Hello World");
// console.log("OK");

// 1. Mudando valores com .value
function mudarTexto() {
    document.getElementById('texto1').value = "Buenas";
}

// 2. Mudando valores com .innerText
function mudarTexto2() {
    // document.getElementById('texto2').innerText = "Inner<br> Text";
    document.getElementById('texto2').innerText =
        "<ul>" +
        "<li>Item 1</li>" +
        "<li>Item 2</li>" +
        "<li>Item 3</li>" +
        "</ul>";
    // console.log("texto2");
}

// 3. Mudando valores com .innerHTML
function mudarTexto3() {
    // document.getElementById('texto3').innerHTML = "Inner<br> HTML";
    document.getElementById('texto3').innerHTML =
        "<ul>" +
        "<li>Item 1</li>" +
        "<li>Item 2</li>" +
        "<li>Item 3</li>" +
        "</ul>";
}

// 4. Mudando uma imagem ao clicar
function mudarImagem() {
    document.getElementById('img1').src = "img/002.jpg";
}

// 5. Mudando uma imagem ao passar o mouse
function mudarImagem2() {
    document.getElementById('img2').src = "img/001.jpg";
}

function voltarImagem() {
    document.getElementById('img2').src = "img/002.jpg";
}

// 6. Mudando o CSS (estilo)
function mudarCorTexto() {
    // Guarda o elemnto inteiro
    const texto = document.getElementById('texto6');

    // texto.innerHTML = "OK";
    // texto.style.color = "red";
    texto.style.color = "#990055";
    // texto.style.fontWeight = "bold";
    texto.style.fontWeight = "700";
    // texto.style.backgroundColor = "yellow";
    texto.style.padding = "10px";

    // Adiciona um a classe CSS no elemento HTML
    texto.classList.add("box");
}

// 7. Mudando o CSS (com parâmetros)
function mudarTexto7(elemento) {
    elemento.innerHTML = "Texto alterado pelo JavaScript";
}

// 8. Chamando uma function que chama outra
function calcular(valor1, valor2) {
    // Converte para número
    /*  const valorConvertido1 = parseInt(valor1.value);
        const valorConvertido2 = parseInt(valor2.value); */

    valor1 = parseFloat(valor1.value);
    valor2 = parseFloat(valor2.value);

    /*  const resultado = valorConvertido1 + valorConvertido2;
        const resultado = valor1 + valor2; */

    const resultado = somar(valor1, valor2);

    // Mostra o resultado
    mostrarResultado(resultado);
}

function somar(valor1, valor2) {
    return valor1 + valor2;
}

function mostrarResultado(resultado) {
    document.getElementById('resultado').innerHTML = resultado;
}

// 9. Clicar, segurar e soltar
function segurar(elemento) {
    elemento.innerHTML = "Solte!";
    elemento.style.color = "#f9f9f9";
    elemento.style.backgroundColor = "#252977";
}

function soltar(elemento) {
    elemento.innerHTML = "Clicar!";
    elemento.style.color = "#232323";
    elemento.style.backgroundColor = "#ff7f50";
}