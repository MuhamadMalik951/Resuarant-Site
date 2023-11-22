import { Homefunction } from './homepage';
import { aboutFunction } from './about';
import { contactUs } from './contact';
import { bookTable } from './BookTable';

export function menu() {
  // const menuButton = document.querySelector('.menuu')
  // menuButton.addEventListener('click', function(){
  const content = document.getElementById('content');

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
                        <div class="specialties">Specialties</div>
                        <div class="navigation">Home >  Menu > </div>
                    </div>
            </div>
        </div> 
        


        <div class="menu-second"  > 
            <div class="breakfast">

                <div class="breakfast-firstrow">

                        <div class="breakfast-1">
                            <img class="breakfastimg" src="icons/breakfast1.jpg.webp" alt="">
                    <div class="breakfastdetail">
                        <div class="breakfastdetailtwo">

                            <div class="breakfastdetail-first">
                                <div class="breakfastdetail-title">Grilled Beef with potatoes</div>
                                <div class="breakfast-price">$29</div>
                            </div>
                            <div class="breakfastdetail-two">
                                <div class="breakfast-incredients">Meat, Potatoes, Rice, Tomatoe</div>
                                <button class="breakfast-orderbutton">Order now</button>
                            </div>
                    </div>
                    </div>
                </div>


                <div class="breakfast-1">
                    <img class="breakfastimg" src="icons/breakfast2.jpg.webp" alt="">
                    <div class="breakfastdetail">
                        <div class="breakfastdetailtwo">

                            <div class="breakfastdetail-first">
                                <div class="breakfastdetail-title">Grilled Beef with potatoes</div>
                                <div class="breakfast-price">$29</div>
                            </div>
                            <div class="breakfastdetail-two">
                                <div class="breakfast-incredients">Meat, Potatoes, Rice, Tomatoe</div>
                                <button class="breakfast-orderbutton">Order now</button>
                            </div>
                    </div>
                    </div>
                </div>
            </div>




                <div class="breakfast-firstrow">

                    <div class="breakfast-1">
                        <div class="breakfastdetail">
                            <div class="breakfastdetailtwo">

                            <div class="breakfastdetail-first">
                                <div class="breakfastdetail-title">Grilled Beef with potatoes</div>
                                <div class="breakfast-price">$29</div>
                            </div>
                            <div class="breakfastdetail-two">
                                <div class="breakfast-incredients">Meat, Potatoes, Rice, Tomatoe</div>
                                <button class="breakfast-orderbutton">Order now</button>
                            </div>
                    </div>
                </div>
                <img class="breakfastimg" src="icons/breakfast3.jpg.webp" alt="">
                </div>


                <div class="breakfast-1">
                    <div class="breakfastdetail">
                        <div class="breakfastdetailtwo">
                            
                            <div class="breakfastdetail-first">
                                <div class="breakfastdetail-title">Grilled Beef with potatoes</div>
                                <div class="breakfast-price">$29</div>
                            </div>
                            <div class="breakfastdetail-two">
                                <div class="breakfast-incredients">Meat, Potatoes, Rice, Tomatoe</div>
                                <button class="breakfast-orderbutton">Order now</button>
                            </div>
                        </div>
                    </div>
                    <img class="breakfastimg" src="icons/breakfast4.jpg.webp" alt="">
                </div>
            </div>



                <div class="breakfast-firstrow">

                    <div class="breakfast-1">
                        <img class="breakfastimg" src="icons/breakfast5.jpg.webp" alt="">
                    <div class="breakfastdetail">
                        <div class="breakfastdetailtwo">

                            <div class="breakfastdetail-first">
                                <div class="breakfastdetail-title">Grilled Beef with potatoes</div>
                                <div class="breakfast-price">$29</div> 
                            </div>
                            <div class="breakfastdetail-two">
                                <div class="breakfast-incredients">Meat, Potatoes, Rice, Tomatoe</div>
                                <button class="breakfast-orderbutton">Order now</button>
                            </div>
                    </div>
                    </div>
                </div>


                <div class="breakfast-1">
                    <img class="breakfastimg" src="icons/breakfast6.jpg.webp" alt="">
                    <div class="breakfastdetail">
                        <div class="breakfastdetailtwo">

                            <div class="breakfastdetail-first">
                                <div class="breakfastdetail-title">Grilled Beef with potatoes</div>
                                <div class="breakfast-price">$29</div>
                            </div>
                            <div class="breakfastdetail-two">
                                <div class="breakfast-incredients">Meat, Potatoes, Rice, Tomatoe</div>
                                <button class="breakfast-orderbutton">Order now</button>
                            </div>
                    </div>
                    </div>
                </div>
            </div>



                <div class="breakfast-firstrow">
                    
                    <div class="breakfast-1">
                        <div class="breakfastdetail">
                            <div class="breakfastdetailtwo">

                            <div class="breakfastdetail-first">
                                <div class="breakfastdetail-title">Grilled Beef with potatoes</div>
                                <div class="breakfast-price">$29</div>
                            </div>
                            <div class="breakfastdetail-two">
                                <div class="breakfast-incredients">Meat, Potatoes, Rice, Tomatoe</div>
                                <button class="breakfast-orderbutton">Order now</button>
                            </div>
                    </div>
                </div>
                <img class="breakfastimg" src="icons/breakfast7.jpg.webp" alt="">
                </div>


                <div class="breakfast-1">
                    <div class="breakfastdetail">
                        <div class="breakfastdetailtwo">
                            
                            <div class="breakfastdetail-first">
                                <div class="breakfastdetail-title">Grilled Beef with potatoes</div>
                                <div class="breakfast-price">$29</div>
                            </div>
                            <div class="breakfastdetail-two">
                                <div class="breakfast-incredients">Meat, Potatoes, Rice, Tomatoe</div>
                                <button class="breakfast-orderbutton">Order now</button>
                            </div>
                        </div>
                    </div>
                    <img class="breakfastimg" src="icons/breakfast8.jpg.webp" alt="">
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
</div>
`;
  content.innerHTML = restaurantHTML;

  const homeButton = document.querySelector('.home');
  homeButton.addEventListener('click', Homefunction);

  const aboutButton = document.querySelector('.about');
  aboutButton.addEventListener('click', aboutFunction);

  const contactButton = document.querySelector('.contact');
  contactButton.addEventListener('click', contactUs);

  const bookTablee = document.querySelector('.bookatable.bookatablesignup');
  bookTablee.addEventListener('click', bookTable);

  const menuItem = document.querySelector('div.menuu');
  console.log(menuItem);
  menuItem.style.color = 'rgb(233, 170, 34)';
}
