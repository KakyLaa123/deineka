const mapBtn = document.querySelector('.map-block__btn');
const mapArea = document.querySelector('.map-full');
const mapMap = document.querySelector('.map-full__map');
const mapClose = document.querySelector('.map-full__close');

const licensImg = document.querySelectorAll('.right-licences__lic-img');
const licensArea = document.querySelector('.img-full');
const licensFull = document.querySelector('.img-area__img');
const licensClose = document.querySelector('.img-full__close');
let x = 35;

const radioBtn = document.querySelectorAll('.choise__rad');
const radioText = document.querySelectorAll('.lang__choise');

const menuOpen = document.querySelector('.header__menu-open');
const menu = document.querySelector('.menu__list');

mapBtn.addEventListener('click', () => {
    mapArea.style.display = 'block';
});

mapClose.addEventListener('click', () => {
    mapArea.style.display = 'none';
});

mapArea.addEventListener('click', e => {
    if(!e.target.closest('.map-full__map') && !e.target.closest('.map-full__close')){
        mapArea.style.display = 'none';
    }
});

licensImg.forEach(elem => {
    elem.addEventListener('click', () => {
        licensArea.style.display = 'flex';
        licensFull.src = elem.src;
    });
});

licensFull.addEventListener('wheel', (e) => {
    if(x > 5 && x < 40){
        let y = e.deltaY;
        if(y > 0){
            x --;
        }
        if(y < 0){
            x ++;
        }
        console.log(x);
        licensFull.style.margin = (40 - x) + 'vw';
        licensFull.style.width = x + 'vw';
        console.log(licensFull.style.margin);
        return x;
    }
    if(x == 5){
        x = 6;
    }
    if(x == 40){
        x = 39;
    }
});

licensClose.addEventListener('click', () => {
    licensArea.style.display = 'none';
});

licensArea.addEventListener('click', e => {
    if(!e.target.closest('.img-area__img') && !e.target.closest('.img-full__close')){
        licensArea.style.display = 'none';
    }
});

radioBtn[0].addEventListener('change', () => {
    radioText[0].classList.add('lang__choise__checked');
    radioText[1].classList.remove('lang__choise__checked');
});

radioBtn[1].addEventListener('change', () => {
    radioText[1].classList.add('lang__choise__checked');
    radioText[0].classList.remove('lang__choise__checked');
});

menuOpen.addEventListener('click', () => {
    menu.style.display = 'flex';
});

window.addEventListener('click', e => {
    if(window.screen.width < 525){
        if(!e.target.closest('.menu__list') && !e.target.closest('.header__menu-open')){
            menu.style.display = 'none';
        }
    }
});

window.addEventListener('touchstart', e => {
    if(window.screen.width < 525){
        if(!e.target.closest('.menu__list') && !e.target.closest('.header__menu-open')){
            menu.style.display = 'none';
        }
    }
});