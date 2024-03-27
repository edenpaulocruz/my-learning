const listaProdutos = document.getElementById('lista-produtos');

let carrinho = [
  "Fone de ouvido - R$100",
  "Celular - R$1400",
  "Oculus VR - R$5000"
];

carrinho.forEach( item => {
  let nome = item.split(' - ')[0]
  let preco = parseInt(item.split(' - ')[1].replace('R$', ''))
  console.log(nome, preco);
})

const section = document.createElement('section');
const section2 = document.createElement('section');

section.classList.add('carrinho__produtos__produto');
section.innerHTML = `
  <span class="texto-azul">1x</span> Oculos VR <span class="texto-azul">R$5000</span>
`;

section2.classList.add('carrinho__produtos__produto');
section2.innerHTML = `
<span class="texto-azul">1x</span> Fone de ouvido <span class="texto-azul">R$100</span>
`;

listaProdutos.appendChild(section);
listaProdutos.appendChild(section2);
