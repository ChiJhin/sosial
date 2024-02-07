import 'modern-normalize';
import '../sass/main.scss';


const pageNav = document.querySelector('.header__page-nav');
const pageNavList = document.querySelector('.header__page-nav-list');
const toHome = document.getElementById('to-home');
const menu = document.getElementById('menu-list')
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


