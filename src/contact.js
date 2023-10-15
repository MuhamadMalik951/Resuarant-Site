import { menu } from "./Menu";
import { aboutFunction } from "./about";
import { Homefunction } from "./homepage";
import { bookTable } from "./BookTable";


export function contactUs(){
    const content = document.querySelector('.content')

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
                <div class="specialties">Contact</div>
                <div class="navigation">Home >  Contact > </div>
            </div>
    </div>
</div> 
<div class="secondcontainer-contact">
    <div class="secondcontainer-contactsection1">

        <div class="secondcontainer-contactpart2">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.142493577691!2d71.6875173763421!3d29.395387349029395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b90c1c55105cd%3A0x44cc44860eb0a623!2sUniversity%20Chowk%2C%20Bahawalpur%2C%20Punjab%2063100%2C%20Pakistan!5e0!3m2!1sen!2s!4v1697298712481!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    </div>
    <div class="secondcontainer-contactpart1">
        <div class="contactus">Contact Us</div>
            <form >
                <input type="text" name="" placeholder="Your Name" class="name">
                <input type="email" placeholder="Your Email" class="name">
                <input type="text" placeholder="Subject" class="name">
                <input type="text" placeholder="Message" class="name message">
                <button class="sendmessage-button">Send Message</button>
            </form>
        </div>
    </div>

    <div class="contact-information-container">
        <div class="onlylast">
            <div class="contact-information">Contact Information</div>
        </div>
        <div class="secondlast">
            <!-- <div class="address">Address: Uni Chowk Road, Bahawalpur</div> -->
            <div class="phone-no">Phone: <span class="yellow-bold">+92-305-4147842</span></div>
            <div class="email-addresss">Email: <span class="yellow-bold">davidprocter951@gmail.com</span></div>
            <div class="mysite">Website: <span class="yellow-bold">https://github.com/DaviDoodlez951</span></div>
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
        <img class="iconss" src="../icons/icons8-twitter-circled-50.png" alt="">
        <img class="iconss" src="../icons/icons8-facebook.svg" alt="">
        <img class="iconss" src="../icons/icons8-instagram-circle-30.png" alt="">
    </div>
</div>
<div class="insta">
    <div class="titlee">Instagram</div>
    <img class="instapic" src="../icons/Instagram.png" alt="">
    
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
</div>  `


    content.innerHTML = restaurantHTML

    const homeButton = document.querySelector('.home')
    homeButton.addEventListener('click', Homefunction)

    const menuButton = document.querySelector('.menu.menuu');
    menuButton.addEventListener('click', menu)

    const aboutButton = document.querySelector('.about');
    aboutButton.addEventListener('click', aboutFunction)

    const bookTablee = document.querySelector('.bookatable.bookatablesignup')
    bookTablee.addEventListener('click', bookTable) 

}