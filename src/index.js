import navigationBar from './nav_bar';
import footer from './footer';
import { pageContent } from './body-page';
import { createForm } from './contact-page';
import './style.scss';
import pizza from "./imgs/pizza.jpg";
import fish from "./imgs/fish-n-chips.jpg";
import chinese from "./imgs/chinese.jpg";
navigationBar();
pageContent();
footer();

// menu function
function menuCards() {
    // create the image and title object
    let menuElements = {
            source: [pizza, fish, chinese],
            title: ["Pizza", "Fish and Chips", "Chinese"],
        }
        // create the wrapper div with the class of menu-cards
    let wrapperDiv = document.createElement("div");
    wrapperDiv.classList.add("menu");
    wrapperDiv.innerHTML = '<h1>Menu</h1>'
    let menuCards = document.createElement("div");
    menuCards.classList.add("menu-cards");
    wrapperDiv.appendChild(menuCards);
    // loop through the menuElements object
    for (let index = 0; index < menuElements.source.length; index += 1) {
        // create a div with the class of menu-card
        let menuCard = document.createElement("div");
        menuCard.classList.add("menu-card");
        menuCards.appendChild(menuCard);
        // create a div with the class img
        let divImg = document.createElement("div");
        divImg.classList.add("img");
        divImg.setAttribute("class", `${menuElements.title[index]}`);
        let servingImg = document.createElement("img");
        servingImg.src = menuElements.source[index];
        servingImg.alt = menuElements.title[index];
        divImg.appendChild(servingImg);
        menuCard.appendChild(divImg);
        // create the title div with the class of title
        let titleDiv = document.createElement("div");
        titleDiv.classList.add("title");
        titleDiv.textContent = menuElements.title[index];
        menuCard.appendChild(titleDiv);

    }
    // append the elements to the DOM
    document.querySelector("section > div.jumbo").appendChild(wrapperDiv);
}

// select each link in the menu
let homeBtn = document.getElementById("home");
let menuBtn = document.getElementById("menu");
let contactBtn = document.getElementById("contact");
let homeBtns = [homeBtn, menuBtn, contactBtn];


function clickEvent(e) {
    switch (e.target.id) {
        case "home":
            document.getElementById("home").classList.add("active");
            document.getElementById("menu").classList.remove("active");
            document.getElementById("contact").classList.remove("active");
            document.querySelector("section > div.jumbo").textContent = "Yeah Home";
            break;
        case "menu":
            document.getElementById("home").classList.remove("active");
            document.getElementById("contact").classList.remove("active");
            document.getElementById("menu").classList.add("active");
            document.querySelector("section > div.jumbo").textContent = " ";
            menuCards();
            break;
        case "contact":
            document.getElementById("home").classList.remove("active");
            document.getElementById("menu").classList.remove("active");
            document.getElementById("contact").classList.add("active");
            document.querySelector("section > div.jumbo").textContent = " ";
            createForm();
            break;

    }
}
for (let elem of homeBtns) {
    elem.addEventListener('click', clickEvent);
}