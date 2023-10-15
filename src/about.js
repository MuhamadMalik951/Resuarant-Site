import { Homefunction } from "./homepage";
import { menu } from "./Menu";
import {contactUs} from "./contact";
import { bookTable } from "./BookTable";




export function aboutFunction() {
    
    const content = document.getElementById('content')

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

<div class="menu-secondcontainer" >
<div class="menu-first">
    <div class="cover">
        <div class="cover-container">
            <div class="covercontainer-first">
                <div class="specialties">About</div>
                <div class="navigation">Home >  About > </div>
            </div>
    </div>
</div> 


<div class="about-secondcontainer">
    <div class="about-secondcontainer-part1">
        <div class="part1-img">
            <div class="firstimg"></div>
            <div class="secondimg"></div>
        </div>
        <div class="part2">
            <div class="part2-firstsection">
                <div class="about-text"><span class="span-about">About</span><span class="span-tandoori">Tandoori</span><span class="span-delights">Delights</span></div>
                <div class="part2-secondsection-intro">
                    <span class="intro-text">
                        Indulge in the exquisite flavors of our restaurant, where exceptional quality meets unparalleled hospitality for a memorable dining experience.
                    </span> 
                    <span class="monday-date">Mon - Fri <span class="monday-datebold">8 AM - 11 PM</span></span>
                    
                </div>
            </div>
            

        </div>
        
    </div>
    <div class="part2-secondsection">
        <div class="part2-secondwidth">

            <div class="part2-secondsection-part1">
                <div class="numbers-first"> <span class="number">18</span>  <span class="yearsofexp">YEARS OF EXPERIENCE</span></div>
            <div class="numbers-first"> <span class="number">50</span>  <span class="yearsofexp">STAFFS</span></div>
        </div>
        <div class="part2-secondsection-part2">
            <div class="numbers-first"> <span class="number">100</span>  <span class="yearsofexp">MENUS/DISH</span></div>
            <div class="numbers-first"> <span class="number">15,000</span>  <span class="yearsofexp">HAPPY CUSTOMERS</span></div>
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
</div> `

    content.innerHTML = restaurantHTML;

    const homeButton = document.querySelector('.home')
    homeButton.addEventListener('click', Homefunction)

    const menuButton = document.querySelector('.menu.menuu');
    menuButton.addEventListener('click', menu)


    const contactButton = document.querySelector('.contact')
    contactButton.addEventListener('click', contactUs)

    const bookTablee = document.querySelector('.bookatable.bookatablesignup')
    bookTablee.addEventListener('click', bookTable) 


}