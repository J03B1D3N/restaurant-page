import tebirkesPic from './pictures/tebirkes.jpg';
import appleCrumblePic from './pictures/apple-crumble.jpg'
import tinginysPic from './pictures/tinginys.jpg'
import painAuChocolatPic from './pictures/pains-au-chocolat.jpg'
import beeStingCakePic from './pictures/bee-sting-cake.jpg'
import canoliPic from './pictures/canoli.jpg'
import VastlakukkelPic from './pictures/Vastlakukkel.jpg'
import PaczkiPic from './pictures/Paczki .jpg'
import CostradaPic from './pictures/Costrada.jpg'
import MedusKūkaPic from './pictures/Medus Kūka.jpg'

export function menu() {
    const x = 220
    const y = 220
    const space = ' ';
    const menuCard = document.createElement('div')
    menuCard.classList.add('menuCard')

    function addOption(name, source) {
        const option = document.createElement('div')
        option.classList.add('option');
        
        const optionText = document.createElement('p')
        optionText.textContent = `${name}`

        const picture = new Image(x, y)
        picture.src = source
        picture.classList.add('picture')

        option.appendChild(picture)
        option.appendChild(optionText)
        menuCard.appendChild(option)
    }
    
    addOption('tebirkes', tebirkesPic)
    addOption('Apple Crumble', appleCrumblePic)
    addOption('Tinginys', tinginysPic)
    addOption('Pain Au Cholocat', painAuChocolatPic)
    addOption('Bee Sting Cake', beeStingCakePic)
    addOption('Canoli', canoliPic)
    addOption('Vastlakukkel', VastlakukkelPic)
    addOption('Paczki', PaczkiPic)
    addOption('Costrada', CostradaPic)
    addOption('Medus Kūka', MedusKūkaPic)
    
    
    main.appendChild(menuCard)
}