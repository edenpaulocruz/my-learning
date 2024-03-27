const listaProdutos = document.getElementById('lista-produtos');
const valorTotal = document.getElementById('valor-total');
const carrinho = [];

function adicionar() {
  const valorProduto = document.getElementById('produto').value;
  const quantidadeProduto = parseInt(document.getElementById('quantidade').value);
  const nomeProduto = valorProduto.split(' - ')[0];
  const precoProduto = parseInt(valorProduto.split(' - ')[1].replace('R$', ''));

  const produtoNoCarrinho = carrinho.find(produto => produto.nome === nomeProduto);

  produtoNoCarrinho ?
    produtoNoCarrinho.quantidade += quantidadeProduto :
    adicionaProduto(nomeProduto, precoProduto, quantidadeProduto);

  atualizaCarrinho();
}

function adicionaProduto(nome, preco, quantidade) {
  carrinho.push(
    {
      nome: nome,
      preco: preco,
      quantidade: quantidade
    }
  );
}

function atualizaCarrinho() {
  listaProdutos.innerHTML = '';

  removeProdutosZerados();

  carrinho.forEach( item => {
    const section = document.createElement('section');

    section.classList.add('carrinho__produtos__produto');
    section.innerHTML = `
      <span class="texto-azul">${item.quantidade}x</span>
      &nbsp;${item.nome}&nbsp;
      <span class="texto-azul">R$${item.preco * item.quantidade}</span>
    `;

    listaProdutos.appendChild(section);
  });
  valorTotal.innerHTML = `R$${calculaTotal()}`;
}

function removeProdutosZerados() {
  let indice = carrinho.lastIndexOf(carrinho.find(produto => produto.quantidade <= 0));

  if (indice < 0) return;

  carrinho.splice(indice, 1);
  removeProdutosZerados();
}

function calculaTotal() {
  const total = carrinho.reduce(
    (total, item) => total + item.quantidade * item.preco, 0
  );

  if (total <= 0) return '';

  return total;
}
