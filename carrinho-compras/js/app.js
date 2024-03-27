const listaProdutos = document.getElementById('lista-produtos');

let carrinho = [
  "Fone de ouvido - R$100",
  "Celular - R$1400",
  "Oculus VR - R$5000"
];

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
