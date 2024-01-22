//  function burgerInit() {
//     const burger = document.querySelector('.header__burger-btn')
//     const header = document.querySelector('.header')
    
//     burger.addEventListener('click', () =>  header.classList.contains('open') ?
//     header.classList.remove('open') : header.classList.add('open'));
//     }  


    window.addEventListener("resize", () => {
      const 



      const mainTitle = document.querySelector('.systems__title')

      const percent = window.innerWidth/100
      console.log(percent)
      mainTitle.style.width =`${710 - percent}px`;
      console.log( mainTitle.style.width )
    });