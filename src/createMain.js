import createNav from "./createNav";

function createMainDiv(){
    const mainDiv = document.createElement('div')
    mainDiv.setAttribute('id', 'main')
    document.body.appendChild(mainDiv)
    createNav();
    createContainer();
}

function createContainer(){
    const container = document.createElement('div')
    container.setAttribute('id', 'container')
    const mainDiv = document.getElementById('main')
    mainDiv.appendChild(container)
}

export default createMainDiv;