document.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>alert('Demo action')));
const searchBtn = document.querySelector(".search-box button");

searchBtn.addEventListener("click", () => {

    alert("Search feature will be connected to backend.");

});


const aboutBtn = document.querySelector(".about-btn");

aboutBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
// Hotel Buttons

const hotelButtons = document.querySelectorAll(".hotel-footer button");

hotelButtons.forEach(button => {

button.addEventListener("click", () => {

alert("Booking page coming soon!");

});

});

// Wishlist

const hearts = document.querySelectorAll(".hotel-footer span");

hearts.forEach(heart => {

heart.addEventListener("click", () => {

heart.classList.toggle("active");

if (heart.classList.contains("active")) {

heart.style.background = "#ff4d6d";

heart.style.color = "#fff";

} else {

heart.style.background = "#f1f1f1";

heart.style.color = "#000";

}

});

});
// Newsletter

document.querySelector(".newsletter button")
.addEventListener("click",()=>{

const email=document.querySelector(".newsletter input").value;

if(email===""){

alert("Please enter your email.");

}

else{

alert("Thank you for subscribing!");

}

});

// CTA

document.querySelector(".cta button")
.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});
// Loader

window.addEventListener("load",()=>{

document.querySelector(".loader").style.display="none";

});

// Mobile Menu

const menu=document.querySelector(".menu-btn");

const nav=document.querySelector(".nav-links");

menu.onclick=()=>{

nav.classList.toggle("active");

};

// Sticky Navbar

window.addEventListener("scroll",()=>{

const navbar=document.querySelector(".navbar");

navbar.classList.toggle("sticky",window.scrollY>20);

});

// Scroll Top Button

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.documentElement.scrollTop>300){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

}

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

// Fade Animation

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(section=>{

section.classList.add("fade");

observer.observe(section);

});
const menuBtn=document.querySelector(".menu-btn");
const navLinks=document.querySelector(".nav-links");

menuBtn.onclick=()=>{

navLinks.classList.toggle("active");

};