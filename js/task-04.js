const refs = {
  value: document.querySelector('#value'),
  increment: document.querySelector('[data-action="increment"]'),
  decrement: document.querySelector('[data-action="decrement"]'),
};

let counterValue  = 0;
const render = () => {
  refs.value.textContent = counterValue ;
};

const handleDecrement = () => { 
  counterValue  -= 1;
  render();
};
const handleIncrement = () => { 
  counterValue  += 1;
   render();
};

refs.decrement.addEventListener('click', handleDecrement);
refs.increment.addEventListener('click', handleIncrement);