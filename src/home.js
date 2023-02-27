export function home() {
    const card = document.createElement('div')
    const headline = document.createElement('p')
    headline.classList.add('headline')
    headline.textContent = 'Welcome to our Pastry House'
    const text = document.createElement('p')
    text.textContent = 'Where we make pastry according to tradition since 1902! Our proffesional staff is trained to make pies accoring to recipies that are more than one hundred years old! Traditional english, or modern danish, we make them all!'
    card.setAttribute('class', 'homeCard animate__fadeIn')
    card.appendChild(headline)
    card.appendChild(text)
    main.appendChild(card)
    
}