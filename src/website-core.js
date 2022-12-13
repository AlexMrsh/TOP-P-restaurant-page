import globals from "./globals";

function initilizeWebsiteCore(){
    document.title = globals.name;
    const h1 = document.querySelector('h1')
    h1.textContent = globals.name;
}

export default initilizeWebsiteCore;