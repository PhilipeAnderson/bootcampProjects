// 0 = verde / 1 = vermelho / 2 = amarelo / 3 = azul

let order = [];
let clickOrder = [];
let score = 0;

const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');

const shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder
  clickOrder = [];

  console.log(order)
  
  for(let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
}

const lightColor = (element, time) => {
  time = time * 500;

  setTimeout(() => {
    element.classList.add('selected');
  }, time)

  setTimeout(() => {
    element.classList.remove('selected')
  }, time)
}

shuffleOrder()




