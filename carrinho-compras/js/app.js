const listaProdutos = document.getElementById('lista-produtos');

const carrinho = [];

carrinho.forEach( item => {
  let nome = item.split(' - ')[0]
  let preco = parseInt(item.split(' - ')[1].replace('R$', ''))
  let section = document.createElement('section');

  section.classList.add('carrinho__produtos__produto');
  section.innerHTML = `
    <span class="texto-azul">1x</span> ${nome} <span class="texto-azul">R$${preco}</span>
  `;

  listaProdutos.appendChild(section);
})

function adicionar() {
  let valorProduto = document.getElementById('produto').value;
  let quantidadeProduto = parseInt(document.getElementById('quantidade').value);
  let nomeProduto = valorProduto.split(' - ')[0];
  let precoProduto = parseInt(valorProduto.split(' - ')[1].replace('R$', ''));
  carrinho.push(
    {
      nome: nomeProduto,
      preco: precoProduto,
      quantidade: quantidadeProduto
    }
  );
  console.log(carrinho);
}
