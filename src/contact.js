import maps from './pictures/maps.jpg'

export function contact() {
    const contactCard = document.createElement('div')
    contactCard.classList.add('contactCard')
    main.appendChild(contactCard)
    const mp = new Image(250, 250)
    mp.src = maps;
    contactCard.appendChild(mp)
}