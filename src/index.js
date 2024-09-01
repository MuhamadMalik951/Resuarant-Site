import { Homefunction } from './homepage';
import { menu } from './Menu';
import { aboutFunction } from './about';

window.addEventListener('load', function () {
  Homefunction();
  const menuButton = document.querySelector('.menu.menuu');
  const homeButton = document.querySelector('.home');
  const arrows = document.querySelectorAll('.arrow')

  const menuItem = document.querySelectorAll('div.menu')
// console.log(menuItem)

// menuItem.forEach((menu) => {
  // menu.addEventListener('mouseov', () => {
    // menu.style.color = 'rgb(233, 170, 34)'
  // })
// })
const darkEffect = document.querySelector('.darkeffect');
darkEffect.addEventListener('mouseover', () => {
  arrows.forEach((arrow) => {
    arrow.className = 'avail'
  })
});

darkEffect.addEventListener('mouseout', () => {
  arrows.forEach((arrow) => {
    arrow.className = 'arrow'
  })
});



// const leftArrow = document.querySelector('.left-arrow')
// const rightArrow = document.querySelector('.right-arrow')
// console.log(leftArrow)
// leftArrow.addEventListener('click', () => {
//   console.log('left arrow is being clicked')
// })

// rightArrow.addEventListener('click', () => {
//   console.log('right arrow is being clicked')
// })
  
});

const blah = document.querySelector('.content')

console.log(blah)
