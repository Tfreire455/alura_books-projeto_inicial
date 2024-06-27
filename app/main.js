

//Requisição de arquivo JSON com FetchAPI
let livros = [];
const endPointAPI =
  "https://guilhermeonrails.github.io/casadocodigo/livros.json";
getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI() {
  const response = await fetch(endPointAPI);
  livros = await response.json();
  console.table(livros);
  const livroComDesconto = descontoAplicado(livros)
  exibirLivrosNaTela(livroComDesconto)
}

/* <div class="livro">
<img class="livro__imagens" src="imagens/Vue.js.png" alt="Capa do livro  Vue.js
Construa aplicações incríveis" />
<h2 class="livro__titulo">
Vue.js
Construa aplicações incríveis
</h2>
<p class="livro__descricao">Caio Incau</p>
<p class="livro__preco" id="preco">R$29,90</p>
<div class="tags">
<span class="tag">Front-end</span>
<span class="tag">Back-end</span>
</div> */