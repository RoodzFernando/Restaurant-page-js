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

let homeBtn = document.getElementById("home");
let menuBtn = document.getElementById("menu");
let contactBtn = document.getElementById("contact");
let querySearch = document.querySelector("section > div.jumbo");
let homeBtns = [homeBtn, menuBtn, contactBtn];


function clickEvent(e) {
    switch (e.target.id) {
        case "home":
            homeBtn.classList.add("active");
            menuBtn.classList.remove("active");
            contactBtn.classList.remove("active");
            querySearch.textContent = " ";
            homePage();
            break;
        case "menu":
            homeBtn.classList.remove("active");
            contactBtn.classList.remove("active");
            menuBtn.classList.add("active");
            querySearch.textContent = " ";
            menuCards();
            break;
        case "contact":
            homeBtn.classList.remove("active");
            menuBtn.classList.remove("active");
            contactBtn.classList.add("active");
            querySearch.textContent = " ";
            createForm();
            break;
    }
}
for (let elem of homeBtns) {
    elem.addEventListener('click', clickEvent);
}