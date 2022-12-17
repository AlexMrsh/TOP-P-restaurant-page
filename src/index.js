//index.js is the main source js, it will only be used to import site elements
console.log('index.js loaded')

import "./style.css";
import initilizeWebsiteCore from "./website-core";

initilizeWebsiteCore()



function listenForNavClicks(element, enable){
    
    accueilNav.addEventListener('click', () => console.log('ok'))
    return{

    }
}


