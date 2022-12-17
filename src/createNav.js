import globals from "./GLOBALS"


function createNav(){
    const nav = document.createElement('nav')
    const main = document.querySelector('#main')
    main.appendChild(nav)
    const getNav = document.querySelector('nav')
    for(let i = 1; i <= Object.keys(globals.nav).length; i++){
        const navElement = document.createElement('div');
        navElement.setAttribute('id', `nav-${i}`);
        navElement.textContent = Object.values(globals.nav)[i-1]
        getNav.appendChild(navElement);
    }
}

export default createNav;