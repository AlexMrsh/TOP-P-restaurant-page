import globals from "./GLOBALS";

function initilizeWebsiteAccueil(){
    const container = document.querySelector('#container')
    container.innerHTML = '';

    const description = document.createElement('div');
    description.setAttribute('id', 'description');
    description.textContent = globals.accueil.description;
    container.appendChild(description)

    for(let i = 1; i <= Object.keys(globals.accueil.content).length; i++){
        const workingObject = Object.keys(globals.accueil.content)[i-1];

        const content = document.createElement('div');
        content.classList.add('content')

        const img = document.createElement('img')
        img.setAttribute('src', globals.accueil.content[workingObject].imgLink)

        const contentText = document.createElement('div')
        contentText.classList.add('content-text')
        
        const contentTitle = document.createElement('h3')
        contentTitle.textContent = globals.accueil.content[workingObject].title;
        
        const contentDescription = document.createElement('div')
        contentDescription.classList.add('content-description')
        contentDescription.textContent = globals.accueil.content[workingObject].description;

        content.appendChild(img)
        content.appendChild(contentText)
        contentText.appendChild(contentTitle)
        contentText.appendChild(contentDescription)

        container.appendChild(content)
    }   
}

export default initilizeWebsiteAccueil;