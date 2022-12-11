

export function menu() {
    const menuCard = document.createElement('div')
    menuCard.classList.add('menuCard')
    const tebirkes = document.createElement('div')
    tebirkes.classList.add('tebirkes')
    const tebirkesName = document.createElement('p')
    tebirkesName.textContent = 'Tebirkes'
    const tb = document.createElement('img')
    tb.src = './tebirkes.jpg';
    tebirkes.appendChild(tb)
    tebirkes.appendChild(tebirkesName)
    menuCard.appendChild(tebirkes)
    main.appendChild(menuCard)
}