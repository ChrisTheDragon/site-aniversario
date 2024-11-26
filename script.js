const raspadinhaContainer = document.querySelector('.raspadinha');

// Função para criar um círculo
function criarCirculo(texto) {
  const circulo = document.createElement('div');
  circulo.classList.add('circulo');

  const textoElemento = document.createElement('p');
  textoElemento.classList.add('texto');
  textoElemento.textContent = texto;
  circulo.appendChild(textoElemento);

  raspadinhaContainer.appendChild(circulo);
}

// Exemplo de como criar 9 círculos com textos aleatórios
for (let i = 0; i < 9; i++) {
  const textoAleatorio = `Prêmio ${i + 1}`; // Substitua por seus próprios textos
  criarCirculo(textoAleatorio);
}

// Funcionalidade de raspar (simplificada)
const circulos = document.querySelectorAll('.circulo');
circulos.forEach(circulo => {
  circulo.addEventListener('mousedown', () => {
    circulo.style.backgroundColor = 'transparent';
  });
});