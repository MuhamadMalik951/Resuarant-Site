import { menu } from './Menu';
import { aboutFunction } from './about';
import { contactUs } from './contact';
import { bookTable } from './BookTable';

export function Homefunction() {
  // const linkElement = document.createElement("link");
  // linkElement.rel = "stylesheet";
  // linkElement.href = "../dist/style.css";
  // document.head.appendChild(linkElement);

  //     const content = document.getElementById('content');

  const restaurantHTML = `
<div class="topbar topbarsignup">
            <div class="topbar-cover">

                <div class="sectionone">
                    <div class="titleee">Tandoori Delights</div>
            </div>
            <div class="sectiontwo">
                <div class="menu home">Home</div>
                <div class="menu menuu">Menu</div>
                <div class="menu about">About</div>
                <div class="menu contact">Contact</div>
                <button class="bookatable bookatablesignup">Book A Table</button>
            </div>
        </div>
        </div>

<div class="container">
    <div class="darkeffect">
        <div class="center-text">
            <div class="text">
                <div class="delicious">Tandoori Delights</div>
                <div class="biryani">
                    <div class="left-arrow"><img class="arrow" src="./icons/icons8-left-arrow-64.png" alt=""></div>
                    <div class="biryani">DELICIOUS SPECIALTIES</div>
                    <div class="right-arrow"><img class="arrow" src="./icons/icons8-right-arrow-64.png" alt=""></div>
                </div>
            </div>
        </div>
        <div class="dishes">
            <div class="dish">
                <img src="icons/breakfast1.jpg.webp" alt="">
                <div class="firstdish">Grilled Beef</div>
            </div>
            <div class="dish">
                <img src="icons/breakfast2.jpg.webp" alt="">
                <div class="firstdish">Pasties</div>
            </div>
            <div class="dish">
                <img src="icons/breakfast3.jpg.webp" alt="">
                <div class="firstdish">Butter Salad</div>
            </div>
            <div class="dish">
                <img src="icons/breakfast4.jpg.webp" alt="">
                <div class="firstdish">Egg Salad</div>
            </div>
        </div>
    </div>
</div>
<div class="secondcontainer">
    <div class="holder">
        <div class="holderpad">
        <div class="  services"><span class="only-services">Services</span><span class="catering-services">Catering Services</span></div>
            <div class="actualservices">
                <div class="partyicons">
                    <img class="cateringicons" src="icons/icons8birthday64.png" alt="">
                    <div class="descriptions">
                        <div class="title birthday">Birthday Party</div>
                        <p class="script">"Discover the joy of celebrating with us! Our restaurants offer unforgettable birthday parties filled with delicious food and delightful memories."</p>
                    </div>
                </div>
                <div class="partyicons">
                    <img class="cateringicons" src="icons/icons8meetingroom100.png" alt="">
                    <div class="descriptions">
                        <div class="title meeting">Business Meetings</div>
                        <p class="script">"Elevate your business gatherings and celebrations with us. Our restaurants cater to both birthday parties and business meetings with excellence."</p>
                    </div>
                </div>
                <div class="partyicons">
                    <img class="cateringicons" src="icons/icons8foodservice50.png" alt="">
                    <div class="descriptions">
                        <div class="wedding title">Wedding Party</div>
                        <p class="script">"Experience the magic of love at our restaurants. We host unforgettable wedding parties amidst our charming ambiance and delectable cuisine."</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>




<div class="thirdcontainer">
                <div class="thirdcontainerbox">

                <div class="last">

                <div class="info">
                    <div class="titlee">Tandoori Delights</div>
                    <div class="descripto ">Indulge in the exquisite flavors of our restaurant, where exceptional quality meets unparalleled hospitality for a memorable dining experience.</div>
                    <div class="socialicons">
                        <img class="iconss" src="icons/icons8twittercircled50.png" alt="">
                        <img class="iconss" src="icons/icons8facebook.svg" alt="">
                        <img class="iconss" src="icons/icons8instagramcircle30.png" alt="">
                    </div>
                </div>
                <div class="insta">
                    <div class="titlee">Instagram</div>
                    <img class="instapic" src="icons/Instagram.png" alt="">
                    
                </div>
                
            </div>
            <div class="secondlast">
                <div class="openhours">
                    <div class="Hours titlee">Open Hours</div>
                    <div class="time">
                        <div class="weekday">
                            <span>Monday</span>
                        <span class="Monday">9:00 - 24:00</span>
                    </div>
                    <div class="weekday">
                        <span>Tuesday</span>
                        <span class="Tuesday">9:00 - 24:00</span>
                    </div>
                    <div class="weekday">
                        <span>Wednesday</span>
                        <span class="Wednesday">9:00 - 24:00</span>
                    </div>
                    <div class="weekday">
                        <span>Thursday</span>
                        <span class="Thursday">9:00 - 24:00</span>
                    </div>
                    <div class="weekday">
                        <span>Friday</span>
                        <span class="Friday">9:00 - 24:00</span>
                    </div>
                    <div class="weekday">
                        <span>Saturday</span>
                        <span class="Saturday">9:00 - 24:00</span>
                    </div>
                    <div class="weekday">
                        <span>Sunday</span>
                        <span class="Sunday">9:00 - 24:00</span>
                    </div>
                </div>
            </div>
                <div class="newsletter">
                    <div class="titlee">Newsletter</div>
                    <div class="textt">Indulge in the exquisite flovors of our restaurant.</div>
                    <button class="textt emailaddress">Enter email address</button>
                    <button class="textt subscribe">Subscribe</button>
                </div>
                
            </div>
        </div>
    </div>
</div>
`;

  content.innerHTML = restaurantHTML;

  const menuButton = document.querySelector('.menu.menuu');
  menuButton.addEventListener('click', menu);

  const aboutButton = document.querySelector('.about');
  aboutButton.addEventListener('click', aboutFunction);

  const contactButton = document.querySelector('.contact');
  contactButton.addEventListener('click', contactUs);

  const bookTablee = document.querySelector('.bookatable.bookatablesignup');
  bookTablee.addEventListener('click', bookTable);

  const container = document.querySelector('.container');

  let index = 0;
  let arrowIndex = 0;
  function incrementIndex() {
    if (index >= 5) {
      index = 0;
    }
    index++;
    container.className = 'container' + ' ' + 'background' + index;
  }
  function decrementIndex() {
    if (index >= 0) {
      index = 5;
    }
    index--;
    container.className = 'container' + ' ' + 'background' + index;
  }

  function arrowIncrementIndex() {
    if (arrowIndex >= 5) {
      arrowIndex = 0;
    }
    arrowIndex++;
    container.className = 'container' + ' ' + 'background' + arrowIndex;
  }

  function arrowDecrementIndex() {
    if (arrowIndex <= -1) {
      arrowIndex = 5;
    }
    arrowIndex--;
    console.log(container.classList)
    container.className = 'container' + ' ' + 'background' + arrowIndex;
  }
  setInterval(() => {
    incrementIndex();
  }, 5000);

  const menuItem = document.querySelector('div.home');
  console.log(menuItem);
  menuItem.style.color = 'rgb(233, 170, 34)';

  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');
  console.log(leftArrow);
  leftArrow.addEventListener('click', () => {
      arrowDecrementIndex();
    console.log('left arrow is being clicked');
    console.log(arrowIndex);
  });
  
  rightArrow.addEventListener('click', () => {
      console.log('right arrow is being clicked');
      arrowIncrementIndex();
    console.log(arrowIndex);
  });
}
