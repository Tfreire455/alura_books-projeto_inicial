function descontoAplicado(livros) {
  const desconto = 0.3;
  const livrosComDesconto = livros.map((livro) => {
    return {...livro, preco: livro.preco - (livro.preco * desconto).toFixed(2)};
  });
  return livrosComDesconto;
}
