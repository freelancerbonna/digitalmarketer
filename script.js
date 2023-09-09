/*================ About js ================*/
const header = document.querySelector("header");
window.addEventListener("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = ()=> {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

window.onscroll = ()=> {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
};


/*================ typed js ================*/
const typed = new Typed('.multiple-text', {
strings: ['Digital Marketer', 'SEM Expert', 'Shopify Designer'],
typeSpeed: 50,
backSpeed: 50,
backDelay: 2500,
loop: true

});


/*================ circle skill js ================*/
const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;


    for(let i = 0 ; i < dots ; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i = 0; i<percent ; i++){
        pointsMarked[i].classList.add('marked');
    }
});

