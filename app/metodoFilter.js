const botoes = document.querySelectorAll(".btn");
botoes.forEach((btn) => btn.addEventListener("click", FiltrarLivros));
function FiltrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    let categoria = elementoBtn.value;
  let livrosFiltrados = livros.filter(
    (livro) => livro.categoria == categoria
  );
  exibirLivrosNaTela(livrosFiltrados)
  console.table(livrosFiltrados);
}
