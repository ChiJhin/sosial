import 'modern-normalize';
import '../sass/main.scss';


const specialistList = document.querySelector('.header__specialists-list');
const toHome = document.getElementById('to-home');
const menu = document.getElementById('menu-list')
console.log(toHome);
console.log(menu);

const title = document.title;

if (!title.includes('Психологічна підтримка')) {
  specialistList.style.display = 'none';
  toHome.style.display = 'block';
} else {
  specialistList.style.display = 'flex';
  toHome.style.display = 'none';
}


