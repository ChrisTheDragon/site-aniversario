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

let cliques = 0; // Contador de círculos clicados
const totalCirculos = circulos.length; // Total de círculos

circulos.forEach(circulo => {
  circulo.addEventListener('mousedown', () => {
    if (!circulo.classList.contains('clicado')) { // Verifica se o círculo já foi clicado
      circulo.style.backgroundColor = 'transparent'; // Raspa o círculo, deixando o prêmio visível
      
      const textoElemento = circulo.querySelector('.texto');
      if (textoElemento) {
        textoElemento.style.color = 'white'; // Muda a cor do texto para branco
      }

      circulo.style.border = '2px solid pink'; // Adiciona uma borda rosa
      circulo.classList.add('clicado'); // Marca o círculo como clicado
      cliques++; // Incrementa o contador de cliques

      // Verifica se todos os círculos foram clicados
      if (cliques === totalCirculos) {
        exibirMensagemParabens(); // Chama a função para exibir a mensagem
      }
    }

    // Adiciona a classe de animação
    circulo.classList.add('girando');

    // Remove a classe após a animação terminar
    circulo.addEventListener('animationend', () => {
      circulo.classList.remove('girando');
    }, { once: true }); // Ouvinte de evento dispara apenas uma vez
  });
});

// Função para exibir a mensagem de parabéns
function exibirMensagemParabens() {
  const mensagem = document.createElement('div');
  mensagem.textContent = 'Parabéns meu Amor! Você ganhou todos os prêmios!!! Retorne ao seu namorado para retira-los';
  mensagem.style.position = 'fixed';
  mensagem.style.top = '50%';
  mensagem.style.left = '50%';
  mensagem.style.transform = 'translate(-50%, -50%)';
  mensagem.style.padding = '20px';
  mensagem.style.backgroundColor = '#df4fc0';
  mensagem.style.color = 'white';
  mensagem.style.fontSize = '24px';
  mensagem.style.fontWeight = 'bold';
  mensagem.style.border = '2px solid white';
  mensagem.style.borderRadius = '10px';
  mensagem.style.textAlign = 'center';
  mensagem.style.zIndex = '1000';

  document.body.appendChild(mensagem);

  // Opcional: Remover a mensagem após alguns segundos
  setTimeout(() => {
    mensagem.remove();
  }, 3000);
}
