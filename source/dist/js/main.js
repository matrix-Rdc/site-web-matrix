const links = document.querySelectorAll('nav ul li a');

function setActiveLink(){
    const currentPath = document.location.pathname; 

    links.forEach(link =>{
        link.classList.remove('link-active');

        const linkPath = "/" + link.getAttribute('href');

        if(currentPath == linkPath){
            link.classList.add('link-active');
        }

    })

}

window.addEventListener('load', setActiveLink());

// Preload

const Preload = document.querySelector('.preload');

setTimeout(() => {
    
    Preload.style.display = 'none';

}, 1000);

// Slide Accueil

const carouSlide = document.querySelector('.slide');
const widthImage = 100;
const images = document.querySelectorAll('.slide-item');
let ctr = 0;
let ctrCloneImage = 0;

function changeCarousel(){

    carouSlide.style.transform = `translateX(-${widthImage * ctr}%)`;
    ctr++;

    if(ctr > images.length){
        const cloneImage = images[ctrCloneImage].cloneNode(true);
        carouSlide.appendChild(cloneImage);

        ctrCloneImage++;
        if(ctrCloneImage >= images.length){
            ctrCloneImage = 0;
        }
    }
}

setInterval(() => {
    changeCarousel();
}, 5000);

window.addEventListener('resize', changeCarousel());

// Navbar

const btnToggle = document.querySelector('#btn-toggle');
const navBar = document.querySelector('header .conteneur nav');

navBar.style.backgroundColor = "var(--colorWhite)!important";

btnToggle.addEventListener('click', function(){

    navBar.classList.toggle('navBarDimPhone');

})