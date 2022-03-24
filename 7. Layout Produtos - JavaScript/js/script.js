
// Lista de Produtos vindos do "Banco de Dados" (simulado)
const listaProdutos = [
	produto = {
		id_produto: 1,
		nome_produto: "Pão francês",
		descricao_produto: "Tradicional pão feito com farinha refinada, água, sal e fermento.",
		valor_produto: 8.99,
		foto_produto: "img/pao-frances.jpg",
	},

	produto = {
		id_produto: 2,
		nome_produto: "Pão de queijo",
		descricao_produto: "Quentinho, saindo do forno.",
		valor_produto: 29.99,
		foto_produto: "img/pao-queijo.jpg",
	},

	produto = {
		id_produto: 3,
		nome_produto: "Pão doce",
		descricao_produto: "Pãozinho doce, bem doce mesmo!",
		valor_produto: 9.99,
		foto_produto: "img/pao-doce.jpg",
	},

	produto = {
		id_produto: 4,
		nome_produto: "Pão integral",
		descricao_produto: "Pão feito com farinha integral, que mantém todos os nutrientes.",
		valor_produto: 11.99,
		foto_produto: "img/pao-integral.jpg",
	},
];

const blocoProdutos = document.querySelector('#bloco-produto');

let rowProduto;
let colProduto;
let contador = 0; // Conta até 4 (Produtos por linha)

// Se houver algm Produto na Lista
if (listaProdutos.length > 0) {
	for (let i = 0; i < listaProdutos.length; i++) {}

} else {
	blocoProdutos.innerHTML = "Não há produtos cadastrados"
}















/*
Métodos:
 - Os métodos em JavaScript devem iniciar com a palavra reservada "function", seguido de um nome, dos parâmetros (entre parênteses) e a abertura de bloco com as chaves.

	{ } chaves
	[ ] colchetes
	( ) parênteses

	function nomeDaFunction() {
		código
	}
*/

/*
Padrão de nomenclatura de métodos (function)
 - Deve iniciar com letra minúscula
 - O nome deve iniciar com um verbo no infinitivo (verbo sem conjugação)
 - Seguido de um substantivo ou adjetivo
 - Este padrão é chamado de lowerCamelCase

 Ex:
*/

function mudarCorBotao(btnComprar) {
    btnComprar.classList.replace("btn-outline-light", "btn-success");
}

function voltarCorBotao(btnComprar) {
    btnComprar.classList.replace("btn-success", "btn-outline-light");
}