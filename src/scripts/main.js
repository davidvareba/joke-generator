import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import jokeData from './helpers/jokeData';

const init = () => {
  document.querySelector('#app').innerHTML = `
  <div id="mainContainer">
    <button class="btn btn-success" id="get-joke-btn">Get A Joke</button>
  </div>
  `;

  const setButton = (btnText, btnId) => {
    document.querySelector('#mainContainer').innerHTML += `
    <button class="btn btn-success" id="${btnId}">${btnText}</button>
    `;
  };

  let joke = {}; // state

  // eslint-disable-next-line no-return-assign
  const setJoke = (obj) => (
    joke = {
      setup: obj.setup,
      punchline: obj.delivery
    }
  );

  document.querySelector('#mainContainer').addEventListener('click', (e) => {
    if (e.target.id === 'get-joke-btn') {
      jokeData().then((response) => {
        setJoke(response);
        // joke = {
        //   setup: response.setup,
        //   punchline: response.delivery
        // }

        // Rerender the DOM with the Joke setup and new button
        document.querySelector('#mainContainer').innerHTML = `<p>${joke.setup}</p>`;
        setButton('Get Punchline', 'get-punchline-btn');
      });
    }

    if (e.target.id === 'get-punchline-btn') {
      // Rerender the DOM with the Joke setup, punchline, and new button
      document.querySelector('#mainContainer').innerHTML = `<p>${joke.setup}</p>`;
      document.querySelector('#mainContainer').innerHTML += `<p>${joke.punchline}</p>`;
      setButton('Get Another Joke', 'get-joke-btn');
    }
  });
};

init();
