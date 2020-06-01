import navigationBar from './nav_bar';
import footer from './footer';
import { pageContent } from './body-page';
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
    // console.log(e.target.id);
    if (e.target.id == "home") {
        document.getElementById("home").classList.add("active");
        document.getElementById("menu").classList.remove("active");
        document.getElementById("contact").classList.remove("active");
        document.querySelector("section > div.jumbo").innerHTML = pageContent();
    } else if (e.target.id == "menu") {
        document.getElementById("home").classList.remove("active");
        document.getElementById("contact").classList.remove("active");
        document.getElementById("menu").classList.add("active");

        document.querySelector("section > div.jumbo").innerHTML = "Menu";
    } else if (e.target.id) {
        document.getElementById("home").classList.remove("active");
        document.getElementById("menu").classList.remove("active");
        document.getElementById("contact").classList.add("active");
        document.querySelector("section > div.jumbo").innerHTML = "Contact";

    }
}
for (let elem of homeBtns) {
    elem.addEventListener('click', clickEvent);
}