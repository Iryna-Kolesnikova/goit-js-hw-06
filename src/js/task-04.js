const counterValue = document.querySelector("#value");

const decrementButton = () => {
  let value = parseInt(counterValue.textContent);
  value -= 1;
  counterValue.textContent = value;
};

const clickButton = document.querySelector('button[data-action="decrement"]');
clickButton.addEventListener('click', decrementButton);

const incrementButton = () => {
  let value = parseInt(counterValue.textContent);
  value += 1;
  counterValue.textContent = value;
};

const clickButtonUp = document.querySelector('button[data-action="increment"]');
clickButtonUp.addEventListener('click', incrementButton);