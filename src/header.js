function createHeader(){    
    const content = document.getElementById('content');
    
    const header = document.createElement('header')
    const upperHeader = document.createElement('div')
    upperHeader.classList.add('upper-header')
    upperHeader.textContent = 'Restaurant'

    content.appendChild(header)
    header.appendChild(upperHeader)

    const lowerHeader = document.createElement('div')
    lowerHeader.classList.add('lower-header')
}

export default createHeader;