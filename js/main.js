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
    }
    else{
        btnScrollToTop.style.display = 'none';
        
    } 
}

window.onscroll =()=>{
    
    if(window.pageYOffset >30){
        
        Navmobile.style.position = 'fixed';
        Navmobile.style.background = "url(../img/Header/MenuBackground_Web.png)";
        // Navmobile.style.background = "black";
        Navmobile.style.marginTop = "-1vmin";
        Navmobile.style.backgroundRepeat = 'no-repeat';

        
        navbar.style.position = 'fixed';
        navbar.style.background = "url(../img/Header/MenuBackground_Web.png)";
        navbar.style.marginTop = "-1.5vmin";
        navbar.style.backgroundRepeat = 'no-repeat';
    }
    else{
        
        Navmobile.style.position = 'absolute';
        // Navmobile.style.background = 'transparent';

        navbar.style.position = 'absolute'
        // navbar.style.background = 'transparent'
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


// const contactBtn = document.querySelector(".contact-btn");
// const emptyTech = document.querySelector(".empty-technologie");
// if($(document).width()<1000){
//     emptyTech.style.display = "inline-block";
//     contactBtn.style.display= "inline-block"
// }