import { bones} from "./bones.js"
import { contact } from "./contact.js"
import { home } from "./home.js"
import { menu } from "./menu.js"

bones()
home()

const homeBtn = document.querySelector('.home')
const menuBtn = document.querySelector('.menu')
const contactBtn = document.querySelector('.contact')

homeBtn.addEventListener('click', () => {
    main.firstChild.remove();
    home()
})

menuBtn.addEventListener('click', () => {
    main.firstChild.remove();
    menu()
})

contactBtn.addEventListener('click', () => {
    main.firstChild.remove();
    contact()
})







    







