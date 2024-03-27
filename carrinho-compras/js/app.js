const listaProdutos = document.getElementById('lista-produtos');
const valorTotal = document.getElementById('valor-total');
const carrinho = [];

function atualizaCarrinho() {
  listaProdutos.innerHTML = '';

  carrinho.forEach( item => {
    const section = document.createElement('section');

    section.classList.add('carrinho__produtos__produto');
    section.innerHTML = `
      <span class="texto-azul">${item.quantidade}x</span>
      &nbsp;${item.nome}&nbsp;
      <span class="texto-azul">R$${item.preco * item.quantidade}</span>
    `;

    listaProdutos.appendChild(section);
    valorTotal.innerHTML = `R$${calculaTotal()}`;
  });
}

function calculaTotal() {
  return carrinho.reduce((total, item) => total + item.quantidade * item.preco, 0)
}

function adicionar() {
  const valorProduto = document.getElementById('produto').value;
  const quantidadeProduto = parseInt(document.getElementById('quantidade').value);
  const nomeProduto = valorProduto.split(' - ')[0];
  const precoProduto = parseInt(valorProduto.split(' - ')[1].replace('R$', ''));

  carrinho.push(
    {
      nome: nomeProduto,
      preco: precoProduto,
      quantidade: quantidadeProduto
    }
  );

  atualizaCarrinho();
}
