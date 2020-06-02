import navigationBar from './nav_bar';
import footer from './footer';
import { pageContent } from './body-page';
import { createForm } from './contact-page';
import { menuCards } from './menu-page';
import { homePage } from './home-page';
import './style.scss';

navigationBar();
pageContent();
footer();

const homeBtn = document.getElementById('home');
const menuBtn = document.getElementById('menu');
const contactBtn = document.getElementById('contact');
const querySearch = document.querySelector('section > div.jumbo');
const homeBtns = [homeBtn, menuBtn, contactBtn];


function clickEvent(e) {
  switch (e.target.id) {
    case 'home':
      homeBtn.classList.add('active');
      menuBtn.classList.remove('active');
      contactBtn.classList.remove('active');
      querySearch.textContent = ' ';
      homePage();
      break;
    case 'menu':
      homeBtn.classList.remove('active');
      contactBtn.classList.remove('active');
      menuBtn.classList.add('active');
      querySearch.textContent = ' ';
      menuCards();
      break;
    case 'contact':
      homeBtn.classList.remove('active');
      menuBtn.classList.remove('active');
      contactBtn.classList.add('active');
      querySearch.textContent = ' ';
      createForm();
      break;
  }
}
for (const elem of homeBtns) {
  elem.addEventListener('click', clickEvent);
}
