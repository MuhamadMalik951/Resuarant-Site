import { menu } from "./Menu";
import { aboutFunction } from "./about";
import { Homefunction } from "./homepage";
import {contactUs} from "./contact";

export function bookTable(){



    const content = document.querySelector('.content')

    const restaurantHTML = `

    <style>

:root {
/* --first: rgb(43, 38, 77); */
--first: hsla(239, 45%, 25%, 0.402);
/* --first: #2b1990; */
--font-color: #d1daed;
--zero: rgb(43, 38, 77, 0.7);
--second: #0E0E20;
--third: #F4743E;
--fourth: #884349;
--fifth: #111022;
--sixth: #1D1B3B;
--dotlink: rgb(30, 26, 155);

}
.topbar {
    z-index: 1;
}

html {
    /* background-image: linear-gradient(to right, #436dac, #0087c0, #00a0c6, #00b7be, #16cbab); */
    /* background-image:url(../icons/biryani_background.jpeg); */
    background-image:url(icons/backgroundmin.jpg);
    /* background-image:url(./background.webp); */
    background-repeat: no-repeat;
    background-size: cover     ;
    /* background-image: linear-gradient(90deg, #2B275F,#02010aff); */
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    /* backdrop-filter: blur(9px); */
    /* backdrop-filter: blur(9.1px); */
    /* background-color: rgba(12, 83, 138, 0.802); */

    
}
form {
    color: white;
    /* background-color: blueviolet; */
    height: 100vh;
    width: 60vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 5vw;
    
    /* align-items: center; */

    
    
}
.empty {
    /* background-color: rgb(6, 25, 62); */
    /* border: 2px solid black; */
    border-radius: 1rem;
    height: 3.5rem;
    width: 12rem;
    display: flex;
    flex-direction: column;
    background-color: var(--first);
}
.lambii {
    width: 25.7rem;
}
.containerr {
    /* background-color: #0087c0; */
    /* background: #0D00A4 ; */
    height: 100vh;
    width: 100vw;
    /* background-color: rgba(194, 193, 194, 0.966); */
    /* background-color: white; */
    /* background-image: linear-gradient(45deg,rgba(43, 39, 95, 0), transparent); */
    /* background-image: linear-gradient(45deg,rgb(43, 39, 95, 0.9 ),rgb(43, 39, 95, 0.9 ), transparent); */
    /* display: flex; */
    /* justify-content: flex-start; */
    /* align-items: center; */
    /* margin: 0px; */
    /* padding: 0px; */
    backdrop-filter: blur(5px);
}
.namecontainer {
    display: flex;
    justify-content: space-between;
    width: 25.7rem;
    /* gap: 1.6rem; */
}
/* .sign-up { */
/* background: rgb(10, 179, 15);
border-radius: 16px;
/* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); */
/* backdrop-filter: blur(9.1px); */
/* -webkit-backdrop-filter: blur(9.1px); */
/* border: 1px solid rgba(236, 227, 227, 0.29); */
/* height: 48rem; */
/* width: 60vw; */
/* background-color: black; */
/* display: grid;
grid-template-columns: 1fr; */

/* flex-direction: column; */
/* justify-content: center; */
/* align-items: center; */


/* } */ 
.topbarsignup {
    background-color: rgba(30, 26, 155, 0.226);
    /* background-color: rgba(30, 26, 155, 0.137); */
}


 .bookatable.bookatablesignup {
    background-color: rgb(30, 26, 155);
} 










.wholecontainer {
    /* background-color: transparent; */
    /* background-color: rgba(12, 83, 138, 0.802); */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 5rem;
    gap: 3rem;
    height: 80vh;
    width: 35rem;
    background-image:url(icons/backgroundmin.jpg);
    /* background-image:url(../icons/biryani_background.jpeg); */
    /* background-blend-mode: screen; */
    background-size: cover;
    border-radius: 50px;
    /* padding-left: 2rem; */
    /* background: var(--zero); */
    box-shadow:  33px 33px 67px var(--second),
                 -33px -33px 67px var(--second);

}

/* label {
    display: block;
    margin-bottom: 0.3rem;
} */
input {
    /* border: 1rem solid transparent; */
    /* border: 11px solid black; */
    outline: none;
    margin-bottom: 2rem;
    color: white;
    /* background-color: rgba(30, 27, 69, 0.564); */
    background-color: transparent;
    /* height: 3rem; */
    width: 11rem;
    border: transparent;
    /* border-radius: 0.8rem; */
    display: flex;
    margin-left: 0.6rem;
    justify-content: center;
    font-size: 0.9rem;
    font-weight: 300;
}
/* input:focus {
    /* outline: #F4743E;    */
    /* border: 0.2rem #262686cf solid;                 */
/* } */ 
input[class="lambi"] {
    width:  18rem;
}
label {
    font-size: 0.7rem;
    margin-top: 0.4rem;

    margin-left: 0.7rem;
    /* color: rgb(255, 255, 255, 0.5); */
    color: rgba(255, 255, 255, 0.542);
    /* margin-top: 1rem; */
}
button {
    width: 12rem;
    height: 3.1rem; 
    /* background: rgb(10, 57, 132); */
    /* background-color: var(--first); */
    background-color: hsla(239, 45%, 25%);;
    border: 0.2rem solid var(--first);
    border-radius: 2rem;
    /* color: white; */
    color: var(--font-color);
}
.buttons {
    display: flex;
    /* gap: 2rem; */
    width: 25.7rem;
    justify-content: space-between;

}
legend {
    font-size: 2.7rem;
    word-spacing: 0.4rem;
    color: var(--font-color);
    font-family: 'Roboto', sans-serif;
}
.dot {
    /* color: var(--first); */
    color: var(--dotlink);
    font-size: 3.6rem; 
}
a {
    text-decoration: none;
    /* color: rgba(27, 161, 223, 0.5); */
    /* color: #F17211; */
    color: var(--dotlink);
    /* color: rgba(255, 255, 255, 0.495); */
    padding-left: 0.3rem;
}
.fade {
    color: rgb(255, 255, 255, 0.5);
    font-size: 0.9rem;
}
.terms {
    display: flex;
    width: 27.5rem;
    justify-content: flex-start;
    align-items: center;
    height: 1rem; 
    /* padding: 0px; */
    /* margin: 0px; */
}
input[type=checkbox] {
    width: 0.9rem;
    margin-left: 1.2rem;
    display:flex;
}
.terms label {
    /* color: red; */
    font-size: 0.9rem;
    margin-bottom: 1.9rem;
}

</style>










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

<div class="containerr">
        <form action="">
            <div class="wholecontainer">
                    <div class="headings">
                        <div class="fade one">START FOR FREE</div>
                    <legend>Reserve Your Table<em class="dot">.</em></legend>
                    <div class="fade">Already A Member?<a href="www.google.com">Log In</a></div>
                </div>
                <div class="namecontainer">
                <div class="firstname empty">
                    <label for="name">FIRST NAME</label>
                    <input type="text" required name="name" id="name" blah ="First Name">
                </div>
                <div class="lastname empty">
                    <label for="Last name">LAST NAME</label>
                    <input type="text" required name="lastname" id="lastname" blah ="Last Name">
                </div>
            </div>
            <div class="email empty lambii">
                <label for="email">E-MAIL</label>
                <input type="email" required id="email" class="lambi" blah ="E-MAIL">
            </div>
            <div class="password empty lambii">
                <label for="password">Phone No</label>
                <input type="number" required name="password" class="lambi" id="password" blah ="Password">
            </div>
            <div  class="confirmpassword empty lambii">
                <label for="confirmpassword">Number Of Guests</label>
                <input type="number" required id="confirmpassword" class="lambi" blah ="Confirm Password">
            </div>
            <div class="terms">
                <input checked required type="checkbox" name="terms" id="terms">
                <label for="terms">I accept and acknowledge the terms and conditions.</label>
            </div>
            
            <div class="buttons">
                <button>Back</button>
                <button>Book A Table</button>
            </div>
        </div>
    </form>
</div>
`
content.innerHTML = restaurantHTML

const homeButton = document.querySelector('.home');
homeButton.addEventListener('click', Homefunction)

const menuButton = document.querySelector('.menu.menuu');
menuButton.addEventListener('click', menu)

const aboutButton = document.querySelector('.about');
aboutButton.addEventListener('click', aboutFunction)

const contactButton = document.querySelector('.contact')
contactButton.addEventListener('click', contactUs)

}