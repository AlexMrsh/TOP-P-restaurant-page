//index.js is the main source js, it will only be used to import site elements
console.log('index.js loaded')

import "./style.css";
import globals from "./GLOBALS";
import initilizeWebsiteAccueil from "./website-accueil";
import initilizeWebsiteCore from "./website-core";
import initilizeWebsiteMenu from "./website-menu";
import initilizeWebsiteContact from "./website-contact";



initilizeWebsiteCore()
listenForNavClicks()

function listenForNavClicks(){
    const navElements = document.querySelectorAll(`[id^='nav-']`)
    navElements.forEach(element => {
        element.addEventListener('click', switchContainer)
    })
    

}


function switchContainer(e){
    const container = document.querySelector('#container')
    container.innerHTML = ''
    
    const navElement = (e.target.id).substring(4)-1
    const elementToLoad = Object.values(globals.nav)[navElement]
    /*
    const functionToCallString = 'initilizeWebsite' + elementToLoad;
    console.log(functionToCall)
    const functionToCall = window[functionToCallString];
    */
    switch(elementToLoad){
        case 'Accueil':
            initilizeWebsiteAccueil();
            break;
        case 'Menu':
            initilizeWebsiteMenu();
            break;
        case 'Contact':
            initilizeWebsiteContact();
            break;
    }
}