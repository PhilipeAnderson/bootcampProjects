// 0 = verde / 1 = vermelho / 2 = amarelo / 3 = azul

let order = [];
let clickOrder = [];
let score = 0;

const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');

// Create color random
const shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickOrder = [];
  
  for(let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  };
}

// Lights the next color
const lightColor = (element, time) => {
  time = time * 500;

  setTimeout(() => {
    element.classList.add('selected');
  }, time - 250);

  setTimeout(() => {
    element.classList.remove('selected');
  }, time);
};

// Check if the buttons is the same of order created in the game
const checkOrder = () => {
  for(let i in clickOrder) {
    if(clickOrder[i] != order[i]) {
      gameOver();
      break;
    };
  };

  if(clickOrder.length == order.length) {
    alert(`Score: ${ score }\n You Win! Started next level!`);
    nextLevel();
  };
};

// Function that get the click user
const click = (color) => {
  clickOrder[clickOrder.length] = color;
  createColorElement(color).classList.add('selected');

  setTimeout(() => {
    createColorElement(color).classList.remove('selected');
  }, 500);

  checkOrder( );
};

// Function that return the color selected
const createColorElement = (color) => {
  if(color == 0) {
    return green;
  }else if(color == 1) {
    return red;
  }else if(color == 2) {
    return yellow;
  }else{
    return blue;
  }
}

// Function for the next level for game
const nextLevel = () => {
  score++;
  shuffleOrder();
}

// Function that finish the game because the user loser the match
const gameOver = () => {
  alert(`Score: ${ score }\n You Lose! For start new game click in OK!`);
  order = [];
  clickOrder = [];

  playGame();
}

// Function that start the match
const playGame = () => {
  alert('Welcome the Genius')
  score = 0;

  nextLevel();
}

