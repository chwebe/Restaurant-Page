import loadHome  from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

import "./style.css";
import "./styles/home.css";
import "./styles/menu.css";
import "./styles/contact.css";


loadHome();

document.getElementById("home-button").addEventListener("click", () => {
    loadHome();
});

document.getElementById("menu-button").addEventListener("click", () => {
    loadMenu();
});

document.getElementById("contact-button").addEventListener("click", () => {
    loadContact();
});
