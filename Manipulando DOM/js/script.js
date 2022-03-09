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

// 2. Mudando valores com .innerHTML
function mudarTexto3() {
    // document.getElementById('texto3').innerHTML = "Inner<br> HTML";
    document.getElementById('texto3').innerHTML =
        "<ul>" +
        "<li>Item 1</li>" +
        "<li>Item 2</li>" +
        "<li>Item 3</li>" +
        "</ul>";
}