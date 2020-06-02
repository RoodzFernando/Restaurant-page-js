import navigationBar from './nav_bar';
import footer from './footer';
import { pageContent } from './body-page';
import { createForm } from './contact-page';
import './style.scss';
navigationBar();
pageContent();
footer();


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
            document.querySelector("section > div.jumbo").textContent = "Yeah menu";
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