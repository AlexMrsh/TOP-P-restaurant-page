import globals from "./GLOBALS";

function createFooter(){
    const footer = document.createElement('footer');
    const span = document.createElement('span');
    
    const topLinkElement = document.createElement('a')
    topLinkElement.setAttribute('href', globals.footer.topLink)
    topLinkElement.textContent = 'The Odin Project';

    const gitHubLinkElement = document.createElement('a')
    gitHubLinkElement.setAttribute('href', globals.footer.gitHubLink);
    gitHubLinkElement.textContent = 'Alex Mrsh on GitHub'

    span.textContent = 'A project from '
    span.appendChild(topLinkElement)
    span.innerHTML += ' curriculum, by '
    span.appendChild(gitHubLinkElement)
    
    footer.appendChild(span)
    document.body.appendChild(footer)
}

export default createFooter;