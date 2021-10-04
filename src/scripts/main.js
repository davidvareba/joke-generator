import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import jokeData from './helpers/jokeData';

const init = () => {
  document.querySelector('#app').innerHTML = `
  `;

  jokeData().then(console.warn);
};

init();
