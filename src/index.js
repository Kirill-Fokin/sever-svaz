export function burgerInit() {
    const burger = document.querySelector('.header__burger-btn')
    const header = document.querySelector('.header')
    
    burger.addEventListener('click', () =>  header.classList.contains('open') ?
    header.classList.remove('open') : header.classList.add('open'));
    }  