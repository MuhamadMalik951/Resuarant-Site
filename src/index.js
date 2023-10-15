import { Homefunction } from "./homepage";
import { menu } from "./Menu";
import { aboutFunction } from "./about";


window.addEventListener('load', function(){
    Homefunction()
    const menuButton = document.querySelector('.menu.menuu')
    const homeButton = document.querySelector('.home')

    homeButton.addEventListener('click', function(){
        console.log('helo world')
    })
})
// window.addEventListener('load', Homefunction) 
// window.addEventListener('load', menu)
