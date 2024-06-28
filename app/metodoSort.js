const ordenarPreco = document.getElementById("btnOrdenarPorPreco");
ordenarPreco.addEventListener("click", ordenarLivroPreco);

function ordenarLivroPreco() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
    exibirLivrosNaTela(livrosOrdenados)
}
