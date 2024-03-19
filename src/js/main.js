import 'modern-normalize';
import '../sass/main.scss';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';


const pageNav = document.querySelector('.hero__page-nav');
const pageNavList = document.querySelector('.hero__page-nav-list');
const toHome = document.getElementById('to-home');
const menu = document.getElementById('menu')
console.log(toHome);
console.log(menu);

const title = document.title;

if (!title.includes('Психологічна підтримка')) {
  pageNav.style.display = 'none';
  toHome.style.display = 'block';
} else {
  pageNav.style.display = 'blok';
  pageNavList.style.display = 'flex';
  toHome.style.display = 'none';
}


const mobileMenu = document.querySelector('.js-menu-container');
const openMenuBtn = document.querySelector('.js-open-menu');
const closeMenuBtn = document.querySelector('.js-close-menu');

const toggleMenu = () => {
  const isMenuOpen =
    openMenuBtn.getAttribute('aria-expanded') === true || false;
  openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
  mobileMenu.classList.toggle('is-open');

  if (!isMenuOpen) {
    disableBodyScroll(mobileMenu)
  }else{
    enableBodyScroll(mobileMenu)

  }
  
};

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);

// Close the mobile menu on wider screens if the device orientation changes
window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  if (!e.matches) return;
  mobileMenu.classList.remove('is-open');
  openMenuBtn.setAttribute('aria-expanded', false);
  enableBodyScroll(document.body);
});