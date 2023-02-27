import maps from './pictures/maps.png'

export function contact() {
    const contactCard = document.createElement('div')
    contactCard.setAttribute('class', 'contactCard animate__fadeIn')
    main.appendChild(contactCard)
    const mp = new Image()
    mp.src = maps;
    mp.classList.add('mp')

    const phone = document.createElement('p');
    phone.textContent = 'Phone: +299-399085'
    const adress = document.createElement('p')
    adress.textContent = 'Adress: PX94+9HW Qaqortoq, Greenland'
    const coordinates = document.createElement('p')
    coordinates.textContent = `Coordinates: 60°43'06.6"N 46°02'36.8"W`;
    contactCard.appendChild(phone)
    contactCard.appendChild(adress)
    contactCard.appendChild(coordinates)
    contactCard.appendChild(mp)
}