//index.js is the main source js, it will only be used to import site elements
console.log('index.js loaded')

import "./style.css";
import globals from "./GLOBALS";
import initilizeWebsiteAccueil from "./website-accueil";
import initilizeWebsiteCore from "./website-core";



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
    initilizeWebsite`${elementToLoad}`()                            //comment intégrer une variable dans le nom d'une function appelée ?
}