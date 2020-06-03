import pizza from './imgs/pizza.jpg';
import fish from './imgs/fish-n-chips.jpg';
import chinese from './imgs/chinese.jpg';

export function menuCards() {
  // create the image and title object
  const menuElements = {
    source: [pizza, fish, chinese],
    title: ['Pizza', 'Fish and Chips', 'Chinese'],
  };
  // create the wrapper div with the class of menu-cards
  const wrapperDiv = document.createElement('div');
  wrapperDiv.classList.add('menu');
  wrapperDiv.innerHTML = '<h1>Menu</h1>';
  const menuCards = document.createElement('div');
  menuCards.classList.add('menu-cards');
  wrapperDiv.appendChild(menuCards);
  // loop through the menuElements object
  for (let index = 0; index < menuElements.source.length; index += 1) {
    // create a div with the class of menu-card
    const menuCard = document.createElement('div');
    menuCard.classList.add('menu-card');
    menuCards.appendChild(menuCard);
    // create a div with the class img
    const divImg = document.createElement('div');
    divImg.classList.add('img');
    divImg.setAttribute('class', `${menuElements.title[index]}`);
    const servingImg = document.createElement('img');
    servingImg.src = menuElements.source[index];
    servingImg.alt = menuElements.title[index];
    divImg.appendChild(servingImg);
    menuCard.appendChild(divImg);
    // create the title div with the class of title
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('title');
    titleDiv.textContent = menuElements.title[index];
    menuCard.appendChild(titleDiv);
  }
  // append the elements to the DOM
  document.querySelector('section > div.jumbo').appendChild(wrapperDiv);
}
