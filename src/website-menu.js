import globals from "./GLOBALS";

function initilizeWebsiteMenu(){
    const container = document.querySelector('#container')
    container.innerHTML = ''

    const description = document.createElement('div');
    description.setAttribute('id', 'description');
    description.textContent = globals.menu.description;
    container.appendChild(description)

    
}

export default initilizeWebsiteMenu;