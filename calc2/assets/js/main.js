function Calculadora() {
  this.display = document.querySelector('.display');

  this.inicia = () => {
    this.capturaCliques();
    this.capturaEnter();
  };

  this.capturaEnter = () => {
    document.addEventListener('keyup', e => {
      if (e.keyCode === 13) {
        this.realizaConta();
      }
    });
  };

  this.capturaCliques = () => {
    document.addEventListener('click', event => {
      const el = event.target;
      if (el.classList.contains('btn-num')) this.addNumDisplay(el);
      if (el.classList.contains('btn-clear')) this.clear();
      if (el.classList.contains('btn-del')) this.del();
      if (el.classList.contains('btn-eq')) this.realizaConta();
    });
  };

  this.realizaConta = () => {
    try {
      const conta = eval(this.display.value);

      if(!conta) {
        alert('Conta inválida');
        return;
      }

      this.display.value = conta;
    } catch(e) {
      alert('Conta inválida');
      return;
    }
  };

  this.addNumDisplay = el => {
    this.display.value += el.innerText;
    this.display.focus();
  };

  this.clear = () => this.display.value = '';
  this.del = () => this.display.value = this.display.value.slice(0, -1);
}

const calculadora = new Calculadora();
calculadora.inicia();

// faz um array com todas as cores desejadas
const colors = ['#00ebc4','#00FF00','#FF6EC7', '#FF2400'];

// chama todos os botoes com a classe .btn
const button = document.querySelectorAll('.btn');


// A função getRandomColor seleciona aleatoria mente uma cor da lista 'do Array colors'
function getRandomColor(){

  // math.floor 
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors [randomIndex];
}

function applyRandomColor(event){
  const funcColor = getRandomColor();

  event.target.style.boxShadow = '0 0 15px ${funcColor}', 'inset 0 0 15px ${funcColor}' ;
}

function revertColor(event){
  event.target.style.boxShadow = 'none';
}

button.forEach(button =>{
  button.addEventListener('mouseenter', applyRandomColor);
  button.addEventListener('mouseleave', revertColor);
});