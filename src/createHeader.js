function createHeader(){
    const header = document.createElement('header')
    const h1 = document.createElement('h1')
    const span = document.createElement('span')
    span.classList.add('motto')

    header.appendChild(h1)
    header.appendChild(span)
    document.body.appendChild(header)
}

export default createHeader;