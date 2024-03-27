const listaProdutos = document.getElementById('lista-produtos');
const carrinho = [];

function atualizaCarrinho() {
  listaProdutos.innerHTML = '';

  carrinho.forEach( item => {
    const section = document.createElement('section');

    section.classList.add('carrinho__produtos__produto');
    section.innerHTML = `
      <span class="texto-azul">${item.quantidade}x</span> ${item.nome} <span class="texto-azul">R$${item.preco}</span>
    `;

    listaProdutos.appendChild(section);
  });
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
