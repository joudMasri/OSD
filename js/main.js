const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', ()=>{
    navLinks.classList.toggle('mobile-menu');
})

const navLogo = document.querySelector('.nav-logo');
const navbar = document.querySelector('.navbar')
const btnScrollToTop = document.getElementById("btnScrollToTop");
const Navmobile = document.querySelector(".navbar-mobile ");
window.onscroll =()=>{
    if(window.pageYOffset >470){
        btnScrollToTop.style.display ='flex';
        Navmobile.style.position = 'fixed'
        navbar.style.position = 'fixed';
    }
    else{
        btnScrollToTop.style.display = 'none';
        navbar.style.position = 'absolute'
        mobileNav.style.position = 'absolute'
    } 
}

btnScrollToTop.addEventListener("click",()=>{
    // window.scrollTo(0,0);

    // Using JQuery
    $("html, body").animate({scrollTop: 0}, 200);
});



const mobileMenu = document.getElementById('mobile-menu');
const x =document.querySelector('.hide-mobile-links');
const mobileNav = document.querySelector('.mobile-nav');
const logo = document.querySelector('.nav-logo');

mobileMenu.addEventListener('click', ()=>{
    mobileNav.style.display ='flex';
    mobileMenu.style.display = 'none'
    logo.style.display ='none'
});

x.addEventListener('click', ()=>{
    mobileNav.style.display = 'none';
    mobileMenu.style.display = 'flex';
    logo.style.display ='block'
});

const contactBtn = document.querySelector(".contact-btn");
const emptyTech = document.querySelector(".empty-technologie");
if($(document).width()<700){
    emptyTech.style.display = "block";
    contactBtn.style.display= 'flex'
}