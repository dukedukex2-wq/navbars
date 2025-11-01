header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 20);
});

const menu = document.querySelector('#menu');
const navbar = document.querySelector('.navbar');
// Focuses on the icon
const icon = menu.querySelector('i');

menu.onclick = () => {
    icon.classList.toggle('ri-menu-3-fill');
    icon.classList.toggle('ri-close-circle-line');
    navbar.classList.toggle('open');
}

window.onscroll = () => {
    navbar.classList.remove('open');
    icon.classList.remove('ri-close-circle-line');
    icon.classList.add('ri-menu-3-fill');

}

