const raspadinhaContainer = document.querySelector('.raspadinha');

// Lista de prêmios
const premios = [
  'Você ganhou um presente!',
  'Mais um beijo!',
  'Uma surpresa especial!',
  'Feliz Aniversário!',
  'Um dia de spa!',
  'Uma noite romântica!',
  'Um jantar surpresa!',
  'Um fim de semana incrível!',
  'Aproveite seu dia!'
];

// Função para criar um círculo
function criarCirculo(texto) {
  const circulo = document.createElement('div');
  circulo.classList.add('circulo');

  const textoElemento = document.createElement('p');
  textoElemento.classList.add('texto');
  textoElemento.textContent = texto;
  circulo.appendChild(textoElemento);

  raspadinhaContainer.appendChild(circulo);

  // Selecionando todos os elementos que têm a classe 'texto' dentro dos círculos
  const circulos = document.querySelectorAll('.circulo');
  circulos.forEach(circulo => {
    const textoElemento = circulo.querySelector('.texto');
    
    // Estilizando a fonte
    textoElemento.style.fontFamily = 'Arial, sans-serif';  // Define a fonte como Arial
    textoElemento.style.fontSize = '11px';  // Tamanho da fonte em pixels
    textoElemento.style.fontWeight = 'bold';  // Deixa a fonte em negrito
    textoElemento.style.fontStyle = 'italic';  // Torna a fonte itálica
  });

  circulos.forEach(circulo => {
    const textoElemento = circulo.querySelector('.texto');
    
    // Estilizando a cor do texto
    textoElemento.style.color = '#df4fc0';  // Define a cor do texto como um tom de vermelho (#FF6347)
  });
  
}

// Exemplo de como criar 9 círculos com prêmios aleatórios
for (let i = 0; i < 9; i++) {
  const premioAleatorio = premios[Math.floor(Math.random() * premios.length)]; // Escolhe um prêmio aleatório
  criarCirculo(premioAleatorio);
}




// Funcionalidade de raspar (atualizada para mudar a cor do texto)
const circulos = document.querySelectorAll('.circulo');

circulos.forEach(circulo => {
  circulo.addEventListener('mousedown', () => {
    circulo.style.backgroundColor = 'transparent'; // Raspa o círculo, deixando o prêmio visível
    
    const textoElemento = circulo.querySelector('.texto'); // Seleciona o elemento de texto dentro do círculo
    if (textoElemento) {
      textoElemento.style.color = 'white'; // Muda a cor do texto para branco
    }
  });
});

