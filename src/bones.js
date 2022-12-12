import "./style.css";


function bones() {
const body = document.querySelector('body');
const header = document.createElement('div')
const main = document.createElement('div')
const footer = document.createElement('div')

content.appendChild(header)
content.appendChild(main)
content.appendChild(footer)

header.setAttribute('id', 'header')
main.setAttribute('id', 'main')
footer.setAttribute('id', 'footer')

footer.textContent = "Copyright @ Justas Lapienė 2022"

const mainSection = document.createElement('div')
const menuSection = document.createElement('div')
const contactSection = document.createElement('div')

header.appendChild(mainSection)
header.appendChild(menuSection)
header.appendChild(contactSection)

mainSection.classList.add('home')
menuSection.classList.add('menu')
contactSection.classList.add('contact')

mainSection.textContent = "HOME"
menuSection.textContent = "MENU"
contactSection.textContent = "CONTACT"
}
export {bones}