import globals from "./GLOBALS";
import createHeader from "./createHeader";
import createMainDiv from "./createMain";
import createFooter from "./createFooter";
import initilizeWebsiteAccueil from "./website-accueil";

function initilizeWebsiteCore(){
    createHeader();
    createMainDiv();
    createFooter();
    initilizeWebsiteContent();
}

function initilizeWebsiteContent(){
    document.title = globals.name;
    const h1 = document.querySelector('h1')
    h1.textContent = globals.name;
    const header = document.querySelector('header')
    const headerMotto = header.querySelector('.motto')
    headerMotto.textContent = globals.motto
    
    initilizeWebsiteAccueil();
}

export default initilizeWebsiteCore;