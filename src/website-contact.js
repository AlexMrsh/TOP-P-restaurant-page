import globals from "./GLOBALS";

function initilizeWebsiteContact(){
    const container = document.querySelector('#container')
    container.innerHTML = '';

    const description = document.createElement('div');
    description.setAttribute('id', 'description');
    description.textContent = globals.contact.description;
    container.appendChild(description)
}

export default initilizeWebsiteContact;