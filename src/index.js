import home from './home.js';
import menu from './menu.js';

function component() {
   home();
   menu();
}

document.querySelector("#content").appendChild(component());