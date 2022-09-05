// let toggle = true;


// const handleLogo = document.querySelectorAll(".logo");
// const contactBtn = document.getElementById("contact-btn");
// const heroLogo = document.getElementById("hero-logo");
// const logoTitle = document.getElementById("logo-title");
// const learnMore = document.getElementById('learn-more')

// const seeWhy = document.querySelector('.see-why');

// const linkPionners =document.querySelector(".link-pionners");
// const whyOSd =document.querySelectorAll('.bold');


// const contentTitleAbout = document.querySelectorAll('.content-title');


// const submit = document.querySelector('.submit');
// const cancel = document.querySelector('.cancel');


// for(let i = 0; i < handleLogo.length;i++){
    
// handleLogo[i].addEventListener("click",()=>{
//     toggle= !toggle;
//     if(toggle){
//         heroLogo.src ="../img/Header/Logo_WithWhite.png";
//         logoTitle.src = "../img/Header/OSD Services Title.png";
//         for(let i = 0 ; i<whyOSd.length; i++){
//             whyOSd[i].style.color ="black";
//         }
//         contactBtn.style.background = "aqua";

//         learnMore.style.background ="transparent";
//         learnMore.style.border = "2px solid  aqua";
    
//         seeWhy.style.color = "#0162ff";

//         linkPionners.style.color = "#0162ff";

//         for(let i = 0 ; i < contentTitleAbout.length; i++){
//             contentTitleAbout[i].style.color ="#0162ff";
//         }

//         // submit.style.background = 'blue';
//         // submit.style.border = "1px solid blue";
//         // cancel.style.background= "transparent";
//         // cancel.style.border = "1px solid blue";
//         // cancel.style.color= 'white';
//     }
//     else{
//         heroLogo.src = "../img/other theme/header/Logo.png";
//         logoTitle.src = "../img/other theme/header/OSD TITLE.png";
//         for(let i = 0 ; i<whyOSd.length; i++){
//             whyOSd[i].style.color ="#df1d5a";
//         }
//         contactBtn.style.background = "#2db67e";
//         learnMore.style.background = "#ebb22d";
//         learnMore.style.border = "2px solid #ebb22d";
    
//         seeWhy.style.color = "#2db67e";

//         linkPionners.style.color = "#ebb22d";

//         for(let i = 0 ; i < contentTitleAbout.length; i++){
//             contentTitleAbout[i].style.color ="black";
//         }
//         // submit.style.background = "#df1d5a";
//         // submit.style.border = "1px solid #df1d5a"
//         // cancel.style.background = "#ebb22d";
//         // cancel.style.border = "1px solid #ebb22d";
//         // cancel.style.color= 'white';
//     }
// })
// }
// handleLogo.addEventListener("click",setSrc)

// function setSrc(){
//     if (heroLogo.src = "../img/Header/Logo_WithWhite.png"){
//         heroLogo.src =  "../img/other theme/header/Logo.png";
//     }
//     else
//     if (heroLogo.src = "../img/other theme/header/Logo.png"){
//         heroLogo.src =  "../img/Header/Logo_WithWhite.png";
//     }

// }


const heroSection = document.getElementById('hero');

heroSection.addEventListener("click",()=>{
    // window.scrollTo(0,document.documentElement.scrollHeight - window.innerHeight);

    // window.scrollTo(0,document.documentElement.scrollHeight - 4850)

    window.scrollTo(0,heroSection.scrollHeight)
})




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
    if(window.pageYOffset >heroSection.scrollHeight){
        btnScrollToTop.style.display ='flex';
    }
    else{
        btnScrollToTop.style.display = 'none';
        
    } 
    
    if(window.pageYOffset >30){
        
        Navmobile.style.position = 'fixed';
        // Navmobile.style.background=  "url(../img/Header/MenuBackground_Web.png)";
        Navmobile.style.background = "black";
        Navmobile.style.marginTop = "-1vmin";
        Navmobile.style.backgroundRepeat = 'no-repeat';

        
        navbar.style.position = 'fixed';
        // navbar.style.background=  "url(../img/Header/MenuBackground_Web.png)";
        navbar.style.background = "black";
        navbar.style.marginTop = "-1.5vmin";
        navbar.style.backgroundRepeat = 'no-repeat';
    }
    else{
        
        Navmobile.style.position = 'absolute';
        Navmobile.style.background = 'transparent';

        navbar.style.position = 'absolute'
        navbar.style.background = 'transparent'
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
const mobileLogo = document.getElementById("mobile-logo");
mobileMenu.addEventListener('click', ()=>{
    mobileNav.style.display ='flex';
    mobileMenu.style.display = 'none'
    // logo.style.display ='none';
    mobileLogo.style.display= "none";
});

x.addEventListener('click', ()=>{
    mobileNav.style.display = 'none';
    mobileMenu.style.display = 'flex';
    // logo.style.display ='block'
    mobileLogo.style.display= "block";
});


// const contactBtn = document.querySelector(".contact-btn");
// const emptyTech = document.querySelector(".empty-technologie");
// if($(document).width()<1000){
//     emptyTech.style.display = "inline-block";
//     contactBtn.style.display= "inline-block"
// }